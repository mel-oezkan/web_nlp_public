import React, { useState } from 'react';
import { IQuestionItem } from '../../../view';
import { useHotkeys } from 'react-hotkeys-hook';

import './style.scss';

export function FlipQuestion({
  questionItem,
}: {
  questionItem: IQuestionItem;
}): JSX.Element {
  const [showQuestion, setShowQuestion] = useState(true);
  useHotkeys('space', () => setShowQuestion(prev => !prev), [showQuestion]);

  return (
    <div className="FlipQuestion">
      {showQuestion ? (
        <div className="FlipQuestionWrapper">
          <p>{questionItem.question}</p>
        </div>
      ) : (
        <div className="FlipAnswerWrapper">
          <p>{questionItem.answer}</p>
        </div>
      )}
    </div>
  );
}
