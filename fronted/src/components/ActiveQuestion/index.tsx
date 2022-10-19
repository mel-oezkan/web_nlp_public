import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { IQuestionItem } from '../../view';
import { FlipQuestion } from './FlipQuestion';

import './style.scss';

export const ActiveQuestion = ({
  activeIndex,
  setActiveIndex,
  questionBuffer,
  setQuestionBuffer,
}: {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
  questionBuffer: IQuestionItem[];
  setQuestionBuffer: (value: IQuestionItem[]) => void;
}) => {
  function deleteQuesiton() {
    const newBuffer = questionBuffer.filter(
      (_, index) => index !== activeIndex
    );
    setQuestionBuffer(newBuffer);
  }

  const questionType = 'Flip Card';

  useHotkeys(
    'right',
    () => setActiveIndex(Math.min(activeIndex + 1, questionBuffer.length - 1)),
    [activeIndex]
  );
  useHotkeys('left', () => setActiveIndex(Math.max(activeIndex - 1, 0)), [
    activeIndex,
  ]);

  return (
    <div className="ActiveQuestion">
      <div className="ActiveHead">
        <p>{questionType}</p>
        <div className="ImgButton" onClick={() => deleteQuesiton()}>
          <img src="trash_white.png" alt="" />
        </div>
      </div>

      <div className="ActiveQuestionContent">
        <FlipQuestion questionItem={questionBuffer[activeIndex]} />
      </div>

      <div className="ActiveQuestionHandler">
        <div
          className="ImgButton"
          onClick={() => {
            setActiveIndex(Math.max(activeIndex - 1, 0));
          }}
        >
          <img src="arrow_left.png" alt="" />
        </div>

        <div
          className="ImgButton"
          onClick={() => {
            setActiveIndex(Math.min(activeIndex + 1, questionBuffer.length));
          }}
        >
          <img src="arrow_right.png" alt="" />
        </div>
      </div>
    </div>
  );
};
