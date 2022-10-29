import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { usePageHandler } from '../../stores/usePageHandler';
import { IQuestionItem } from '../../view';
import './style.scss';

export function QuesitonBuffer(): JSX.Element {
  const { activeIndex, setActiveIndex } = usePageHandler(state => state);
  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <div className="QuestionBuffer">
      <div className="BufferWrapper">
        {questionBuffer.map((question, index) => (
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
