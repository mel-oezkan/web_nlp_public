import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../../view';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';

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
  const [questionBuffer, setQuestionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

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
                  <form action="">
                    <input type="text" />
                  </form>
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
