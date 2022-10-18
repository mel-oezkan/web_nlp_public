import React, { useState } from 'react';
import { Dropdown } from '../Common/Dropdown';
import {
  questionDifficulties,
  questionTypes,
  questionCategories,
} from './dropdown_options';

export default function UserInput() {
  const [activeType, setActiveType] = useState('');
  const [activeDiff, setActiveDiff] = useState('');
  const [activeCate, setActiveCate] = useState('');

  return (
    <div className="UserInput">
      <Dropdown
        title="Question Type"
        options={questionTypes}
        active={activeType}
        setActive={setActiveType}
      />
      <Dropdown
        title="Quesiton Difficulty"
        options={questionDifficulties}
        active={activeDiff}
        setActive={setActiveDiff}
      />
      <Dropdown
        title="Question Category"
        options={questionCategories}
        active={activeCate}
        setActive={setActiveCate}
      />
    </div>
  );
}
