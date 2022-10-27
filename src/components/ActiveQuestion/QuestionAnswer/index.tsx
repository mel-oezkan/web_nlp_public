import React, { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import useFeedbackHandler from '../../../hooks/useFeedbackHandler';
import { IQuestionItem } from '../../../view';
import { Dictaphone } from '../../Dictaphone';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';
import { handleSubmit } from './handler';

import './style.scss';

export function QuestionAnswer({
  activeIndex,
  questionType,
  setActiveIndex,
  setQuestionType,
}: {
  activeIndex: number;
  questionType: string;
  setActiveIndex: (value: number) => void;
  setQuestionType: (value: string) => void;
}) {
  const [answer, setAnswer] = useState('');
  const changeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const { feedback, generateFeedback } = useFeedbackHandler();
  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  function handleFeedback(value: number) {
    return () => {
      console.log(value);
    };
  }

  const test = useCallback(() => {
    const question = questionBuffer[activeIndex].question;
    return generateFeedback(question, answer);
  }, [activeIndex]);

  return (
    <div className="QuestionWrapper QuestionAnser">
      <div className="QuestionContent">
        <TypeHandler
          activeIndex={activeIndex}
          questionType={questionType}
          setActiveIndex={setActiveIndex}
          setQuestionType={setQuestionType}
        />

        {questionBuffer && (
          <>
            {questionBuffer[activeIndex] && (
              <div className="QuestionDisplay QA-Wrapper">
                <p>{questionBuffer[activeIndex].question}</p>

                <div className="QA-Input">
                  <p>Answer:</p>
                  <form onSubmit={e => handleSubmit(e, test)}>
                    <input type="text" value={answer} onChange={changeAnswer} />
                  </form>
                  <Dictaphone setContext={setAnswer} />
                </div>

                <div className="QA-Feedback">
                  <p>{feedback}</p>
                </div>
              </div>
            )}
          </>
        )}

        <IndexHandler
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
