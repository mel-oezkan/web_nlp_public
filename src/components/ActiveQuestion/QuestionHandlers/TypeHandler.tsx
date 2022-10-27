import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../../view';
import { questionTypesItems } from '../../Common/commons';

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {},
    transitionEnd: {
      display: 'none',
    },
  },
};

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
  const [isMouse, toggleMouse] = useState(false);

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

  function indexActive() {
    return questionTypesItems.filter(item => item.name === questionType)[0].icon
      .black;
  }

  return (
    <div className="TypeHandler">
      <motion.div
        className="TypeSelector"
        onMouseLeave={() => toggleMouse(false)}
      >
        <div className="TypeSelectorHead">
          <motion.div
            className="QuestionTypeItem"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            variants={subMenuAnimate}
            onClick={() => toggleMouse(prev => !prev)}
          >
            <img src={isMouse ? 'close.png' : indexActive()} alt="" />
          </motion.div>
        </div>
        <motion.div
          className="TypeSelectorDrop"
          initial="exit"
          animate={isMouse ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          {questionTypesItems.map((item, index) => (
            <div
              className="QuestionTypeItem"
              key={index}
              onClick={() => setQuestionType(item.name)}
            >
              <div className="QuestionTypeImg">
                <img src={item.icon.black} alt="" />
              </div>

              <div
                className="QuestionTypeTooltip"
                style={{ position: 'absolute' }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="ImgButton" onClick={() => deleteQuesiton()}>
        <img src="trash_black.png" alt="" />
      </div>
    </div>
  );
}
