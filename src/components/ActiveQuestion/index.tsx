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
  const [questionType, setQuestionType] = useState('qa');

  return (
    <div className="ActiveQuestion">
      {(() => {
        switch (questionType) {
          case 'fl':
            return (
              <FlipQuestion
                activeIndex={activeIndex}
                questionType={questionType}
                setActiveIndex={setActiveIndex}
                setQuestionType={setQuestionType}
              />
            );

          case 'qa':
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
