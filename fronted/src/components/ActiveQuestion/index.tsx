import React, { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../view';
import { FlipQuestion } from './FlipQuestion';
import { motion } from 'framer-motion';

import './style.scss';

export const ActiveQuestion = ({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}) => {
  const [questionType, setQuestionType] = useState('flip');

  return (
    <div className="ActiveQuestion">
      {questionType === 'flip' && (
        <FlipQuestion
          activeIndex={activeIndex}
          questionType={questionType}
          setActiveIndex={setActiveIndex}
          setQuestionType={setQuestionType}
        />
      )}
    </div>
  );
};
