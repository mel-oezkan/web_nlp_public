import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../../view';

import './style.scss';

export function IndexHandler({
  activeIndex,
  setActiveIndex,
}: {
  activeIndex: number;
  setActiveIndex: (value: number) => void;
}): JSX.Element {
  useHotkeys(
    'right',
    () => setActiveIndex(Math.min(activeIndex + 1, questionBuffer.length - 1)),
    [activeIndex]
  );

  useHotkeys('left', () => setActiveIndex(Math.max(activeIndex - 1, 0)), [
    activeIndex,
  ]);

  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <div className="IndexHandler">
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
  );
}
