import React from 'react';
import { ActiveQuestion } from '../components/ActiveQuestion';
import { QuesitonBuffer } from '../components/QuestionBuffer';
import UserInput from '../components/UserInput';
import './style.scss';

export function ViewHandler(): JSX.Element {
  return (
    <div className="ViewHandler">
      <UserInput />
      <div className="QuestionHandler">
        <ActiveQuestion />
        <QuesitonBuffer />
      </div>
    </div>
  );
}
