import React, { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import useFeedbackHandler from '../../../hooks/useFeedbackHandler';
import { IQuestionItem } from '../../../view';
import { Dictaphone } from '../../Dictaphone';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';
import { requestFeedback } from './handler';

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
  const [tmpAnswer, setTmpAnswer] = useState('');
  const changeAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpAnswer(e.target.value);
  };

  const [feedback, setFeedack] = useState('');
  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  async function handleFeedback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (answer !== tmpAnswer) {
      setAnswer(tmpAnswer);
      const activeItem = questionBuffer[activeIndex];

      await requestFeedback(activeItem.question, tmpAnswer)
        .then(data => {
          console.log(data);
          if (data.length <= 1) {
            return;
          }

          setFeedack(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

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
                  <form onSubmit={e => handleFeedback(e)}>
                    <input
                      type="text"
                      value={tmpAnswer}
                      onChange={changeAnswer}
                    />
                  </form>
                  <Dictaphone setContext={setTmpAnswer} />
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
