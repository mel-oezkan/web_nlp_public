import React, { useState } from 'react';
import { ActiveQuestion } from '../components/ActiveQuestion';
import { QuesitonBuffer } from '../components/QuestionBuffer';
import UserInput from '../components/UserInput';

import { useLocalStorage } from 'usehooks-ts';

import './style.scss';

export interface IQuestionItem {
  question: string;
  answer: string;
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
        <ActiveQuestion
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          questionBuffer={questionBuffer}
          setQuestionBuffer={setQuestionBuffer}
        />
        <QuesitonBuffer
          questions={questionBuffer}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </div>
  );
}
