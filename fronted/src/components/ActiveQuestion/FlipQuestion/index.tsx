import React, { useState } from 'react';
import { IQuestionItem } from '../../../view';
import { useHotkeys } from 'react-hotkeys-hook';

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
        <p>{questionItem.question}</p>
      ) : (
        <p>{questionItem.answer}</p>
      )}
    </div>
  );
}
