import React, { useEffect, useState } from 'react';
import { IQuestionItem } from '../../../view';
import { useHotkeys } from 'react-hotkeys-hook';

import './style.scss';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';
import { useLocalStorage } from 'usehooks-ts';
import { motion } from 'framer-motion';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';

export function FlipQuestion({
  // questionBuffer,
  activeIndex,
  questionType,
  setActiveIndex,
  setQuestionType,
}: {
  // questionBuffer: IQuestionItem[];
  activeIndex: number;
  questionType: string;
  setActiveIndex: (value: number) => void;
  setQuestionType: (value: string) => void;
}): JSX.Element {
  const [showQuestion, setShowQuestion] = useState(true);
  useHotkeys(
    'space',
    () => {
      questionBuffer[activeIndex] && setShowQuestion(prev => !prev);
    },
    [showQuestion]
  );

  const [questionBuffer, setQuestionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <motion.div
      key={showQuestion ? 'question' : 'answer'}
      className="QuestionWrapper FlipQuestion"
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
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
              <>
                {showQuestion ? (
                  <div className="QuestionDisplay FlipQuestionWrapper">
                    <p>
                      {questionBuffer[activeIndex]
                        ? questionBuffer[activeIndex].question
                        : ''}
                    </p>
                  </div>
                ) : (
                  <div className="QuestionDisplay FlipAnswerWrapper">
                    <p>{questionBuffer[activeIndex].answer}</p>
                  </div>
                )}
              </>
            )}
          </>
        )}
        <IndexHandler
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </motion.div>
  );
}
