import React, { useState } from 'react';
import { IQuestionItem } from '../../view';
import { Dropdown } from '../Common/Dropdown';
import {
  questionDifficulties,
  questionTypes,
  questionCategories,
} from './dropdown_options';

import './style.scss';

export default function UserInput({
  questionBuffer,
  setQuestionBuffer,
  setActiveIndex,
}: {
  questionBuffer: IQuestionItem[];
  setActiveIndex: (value: number) => void;
  setQuestionBuffer: (value: IQuestionItem[]) => void;
}) {
  const [activeType, setActiveType] = useState('');
  const [activeDiff, setActiveDiff] = useState('');
  const [activeCate, setActiveCate] = useState('');

  function handleSubmit() {
    console.log('added question');
    setQuestionBuffer([
      ...questionBuffer,
      {
        question: `Question ${questionBuffer.length}`,
        answer: `Answer ${questionBuffer.length}`,
      },
    ]);
    setActiveIndex(questionBuffer.length);
  }

  return (
    <div className="UserInput">
      <Dropdown
        title="Question Type"
        options={questionTypes}
        active={activeType}
        setActive={setActiveType}
        imgSrc="question_type.png"
      />
      <Dropdown
        title="Quesiton Difficulty"
        options={questionDifficulties}
        active={activeDiff}
        setActive={setActiveDiff}
        imgSrc="question_difficulty.png"
      />
      <Dropdown
        title="Question Category"
        options={questionCategories}
        active={activeCate}
        setActive={setActiveCate}
        imgSrc="question_category.png"
      />
      <button onClick={() => handleSubmit()}>
        <img src="add.png" alt="" />
        Generate Question
      </button>
    </div>
  );
}
