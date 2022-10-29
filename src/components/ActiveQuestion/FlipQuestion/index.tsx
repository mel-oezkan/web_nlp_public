import React, { useEffect, useState } from 'react';
import { IQuestionItem } from '../../../view';
import { useHotkeys } from 'react-hotkeys-hook';

import './style.scss';
import { TypeHandler } from '../QuestionHandlers/TypeHandler';
import { useLocalStorage } from 'usehooks-ts';
import { motion } from 'framer-motion';
import { IndexHandler } from '../QuestionHandlers/IndexHandler';
import { usePageHandler } from '../../../stores/usePageHandler';

export function FlipQuestion(): JSX.Element {
  const activeIndex = usePageHandler(state => state.activeIndex);

  const [showQuestion, setShowQuestion] = useState(true);
  useHotkeys(
    'space',
    () => {
      questionBuffer[activeIndex] && setShowQuestion(prev => !prev);
    },
    [showQuestion]
  );

  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
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
        <TypeHandler />

        {questionBuffer && (
          <>
            {questionBuffer[activeIndex] && (
              <>
                {showQuestion ? (
                  <div className="QuestionDisplay FlipQuestionWrapper">
                    <p>{questionBuffer[activeIndex].question}</p>
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
        <IndexHandler />
      </div>
    </motion.div>
  );
}
