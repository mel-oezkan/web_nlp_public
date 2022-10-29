import React, { useCallback, useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import useFeedbackHandler from '../../../hooks/useFeedbackHandler';
import { usePageHandler } from '../../../stores/usePageHandler';
import { IQuestionItem } from '../../../view';
import { Dictaphone } from '../../Dictaphone';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';
import { requestFeedback } from './handler';

import './style.scss';

export function QuestionAnswer() {
  const activeIndex = usePageHandler(state => state.activeIndex);

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
        <TypeHandler />

        {questionBuffer && (
          <>
            {questionBuffer[activeIndex] && (
              <div className="QuestionDisplay QA-Wrapper">
                <div className="QA-Question">
                  <p>{questionBuffer[activeIndex].question}</p>
                </div>

                <div className="QA-Input">
                  <p>Answer:</p>

                  <div className="AnswerInputField">
                    <form onSubmit={e => handleFeedback(e)}>
                      <input
                        type="text"
                        value={tmpAnswer}
                        onChange={changeAnswer}
                      />
                    </form>
                    <div className="VoiceInputWrapper">
                      <Dictaphone setContext={setTmpAnswer} />
                    </div>
                  </div>

                  <div className="QA-Feedback">
                    <p>{feedback}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <IndexHandler />
      </div>
    </div>
  );
}
