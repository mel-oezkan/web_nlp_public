import React from 'react';
import { IQuestionItem } from '../../view';
import './style.scss';

export function QuesitonBuffer({
  questions,
  activeIndex,
  setActiveIndex,
}: {
  questions: IQuestionItem[];
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}): JSX.Element {
  return (
    <div className="QuestionBuffer">
      <div className="BufferWrapper">
        {questions.map((question, index) => (
          <div
            key={question.question}
            className={[
              'QuestionBox',
              index === activeIndex ? 'ActiveQuestionBox' : '',
            ].join(' ')}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            <p>{question.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
