import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useLocalStorage } from 'usehooks-ts';
import { usePageHandler } from '../../../stores/usePageHandler';
import { IQuestionItem } from '../../../view';

import './style.scss';

export function IndexHandler(): JSX.Element {
  const index = usePageHandler(state => state.activeIndex);
  const setIndex = usePageHandler(state => state.setActiveIndex);

  useHotkeys(
    'right',
    () => setIndex(Math.min(index + 1, questionBuffer.length - 1)),
    [index]
  );

  useHotkeys('left', () => setIndex(Math.max(index - 1, 0)), [index]);

  const [questionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  return (
    <div className="IndexHandler">
      <div
        className="ImgButton"
        onClick={() => {
          setIndex(Math.max(index - 1, 0));
        }}
      >
        <img src="arrow_left.png" alt="" />
      </div>

      <div
        className="ImgButton"
        onClick={() => {
          setIndex(Math.min(index + 1, questionBuffer.length));
        }}
      >
        <img src="arrow_right.png" alt="" />
      </div>
    </div>
  );
}
