import React, { useState } from 'react';
import axios from 'axios';
import { IQuestionItem } from '../../view';
import { Dropdown } from '../Common/Dropdown';
import {
  questionTypesItems,
  questionDifficulties,
  questionCategories,
} from '../Common/commons';
import './style.scss';
import { IResponseObj } from '../Common/types';
import { QuestionGenerator } from '../QuestionGenerator';

const questionDiffOpts = questionDifficulties.map(item => item.value);
const questionCateOpts = questionCategories.map(item => item.name);

export default function UserInput({
  questionBuffer,
  setQuestionBuffer,
  setActiveIndex,
}: {
  questionBuffer: IQuestionItem[];
  setActiveIndex: (value: number) => void;
  setQuestionBuffer: (value: IQuestionItem[]) => void;
}) {
  const [activeDiff, setActiveDiff] = useState('');
  const [activeCate, setActiveCate] = useState('');

  return (
    <div className="UserInput">
      <Dropdown
        title="Quesiton Difficulty"
        options={questionDiffOpts}
        active={activeDiff}
        setActive={setActiveDiff}
        imgSrc="question_difficulty.png"
      />
      <Dropdown
        title="Question Category"
        options={questionCateOpts}
        active={activeCate}
        setActive={setActiveCate}
        imgSrc="question_category.png"
      />

      <QuestionGenerator
        topic={activeCate}
        difficulty={activeDiff}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
