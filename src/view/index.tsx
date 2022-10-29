import React, { useState } from 'react';
import { ActiveQuestion } from '../components/ActiveQuestion';
import { QuesitonBuffer } from '../components/QuestionBuffer';
import UserInput from '../components/UserInput';
import create from 'zustand';

import { useLocalStorage } from 'usehooks-ts';

import './style.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { usePageHandler } from '../stores/usePageHandler';

export interface IQuestionItem {
  question: string;
  answer: string;
  topic: string;
  options?: string[];
}

export function ViewHandler(): JSX.Element {
  const activeIndex = usePageHandler(state => state.activeIndex);
  const [questionBuffer, setQuestionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <div className="ViewHandler">
      <div className="SideBar">
        <UserInput />
        <QuesitonBuffer />
      </div>

      <div className="QuestionHandler">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="QuestionHandlerWrapper"
            key={activeIndex}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -1, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {questionBuffer.length > 0 ? (
              <ActiveQuestion />
            ) : (
              <div className="QuestionWrapper">
                <div className="QuestionContent"></div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
