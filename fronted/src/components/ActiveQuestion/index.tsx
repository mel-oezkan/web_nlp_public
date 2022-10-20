import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../view';
import { FlipQuestion } from './FlipQuestion';
import { motion } from 'framer-motion';

import './style.scss';
import { QuestionAnswer } from './QuestionAnswer';

export const ActiveQuestion = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}) => {
  const [questionType, setQuestionType] = useState('answer');

  return (
    <div className="ActiveQuestion">
      {(() => {
        switch (questionType) {
          case 'flip':
            return (
              <FlipQuestion
                activeIndex={activeIndex}
                questionType={questionType}
                setActiveIndex={setActiveIndex}
                setQuestionType={setQuestionType}
              />
            );

          case 'answer':
            return (
              <QuestionAnswer
                activeIndex={activeIndex}
                questionType={questionType}
                setActiveIndex={setActiveIndex}
                setQuestionType={setQuestionType}
              />
            );
        }
      })()}
    </div>
  );
};
