import React, { useState } from 'react';
import { FlipQuestion } from './FlipQuestion';

import './style.scss';
import { QuestionAnswer } from './QuestionAnswer';
import { usePageHandler } from '../../stores/usePageHandler';

export const ActiveQuestion = () => {
  const activeType = usePageHandler(state => state.activeType);
  const activeIndex = usePageHandler(state => state.activeIndex);

  return (
    <div className="ActiveQuestion">
      {(() => {
        switch (activeType) {
          case 'fl':
            return <FlipQuestion />;

          case 'qa':
            return <QuestionAnswer />;
        }
      })()}
    </div>
  );
};
