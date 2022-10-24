import React from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../../view';
import { questionTypesItems } from '../../Common/commons';

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
      <div className="TypeSelector">
        <div className="TypeSelectorHead">{questionType}</div>
        <div className="TypeSelectorDropdown">
          {questionTypesItems.map((item, index) => (
            <div className="QuestionTypeItem" key={index}>
              <div className="QuestionTypeImg">
                <img src={item.icon.black} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ImgButton" onClick={() => deleteQuesiton()}>
        <img src="trash_white.png" alt="" />
      </div>
    </div>
  );
}
