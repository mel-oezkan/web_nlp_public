import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../../view';

export function TypeHandler({
  questionType,
  activeIndex,
  setActiveIndex,
  setQuestionType,
}: {
  questionType: string;
  activeIndex: number;
  setActiveIndex: (value: number) => void;
  setQuestionType: (value: string) => void;
}): JSX.Element {
  const [questionBuffer, setQuestionBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  function deleteQuesiton() {
    const newQuestionBuffer = questionBuffer.filter(
      (_, index) => index !== activeIndex
    );
    setQuestionBuffer(newQuestionBuffer);
    setActiveIndex(0);
  }

  return (
    <div className="TypeHandler">
      <div className="ImgButton" onClick={() => deleteQuesiton()}>
        <img src="trash_white.png" alt="" />
      </div>
    </div>
  );
}
