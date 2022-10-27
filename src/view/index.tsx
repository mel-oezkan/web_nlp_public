import React, { useState } from 'react';
import { ActiveQuestion } from '../components/ActiveQuestion';
import { QuesitonBuffer } from '../components/QuestionBuffer';
import UserInput from '../components/UserInput';

import { useLocalStorage } from 'usehooks-ts';

import './style.scss';
import { AnimatePresence, motion } from 'framer-motion';

export interface IQuestionItem {
  question: string;
  answer: string;
  topic: string;
  options?: string[];
}

export function ViewHandler(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionBuffer, setQuestionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <div className="ViewHandler">
      <UserInput
        questionBuffer={questionBuffer}
        setActiveIndex={setActiveIndex}
        setQuestionBuffer={setQuestionBuffer}
      />
      <div className="QuestionHandler">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={
              questionBuffer[activeIndex]
                ? questionBuffer[activeIndex].question
                : 'empty'
            }
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {questionBuffer.length > 0 ? (
              <ActiveQuestion
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            ) : (
              <div className="QuestionWrapper">
                <div className="QuestionContent"></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <QuesitonBuffer
          questions={questionBuffer}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
