import React, { useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IQuestionItem } from '../../view';
import { requestCompletion } from './handler';
import { addToStorage } from './utils';
import axios from 'axios';
import { Categories } from '../Common/commons';

export const QuestionGenerator = ({
  topic,
  difficulty,
  setActiveIndex,
}: {
  topic: string;
  difficulty: string;
  setActiveIndex: (value: number) => void;
}) => {
  const [error, setError] = useState('');
  const [buffer, setBuffer] = useLocalStorage<IQuestionItem[]>(
    'questionBuffer',
    []
  );

  async function generateQuestion() {
    if (!topic || !difficulty) {
      setError('Please select all options');
      return;
    }

    await requestCompletion(topic, difficulty)
      .then(data => {
        console.log('response: ', data);
        addToStorage(buffer, setBuffer, data, topic);
        setError('');
      })
      .catch(error => {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.error);
        } else {
          console.log(error);
        }
      });

    setActiveIndex(buffer.length);
  }

  return (
    <div className="QuestionGenerator">
      <p>{error}</p>
      <button onClick={() => generateQuestion()}>
        <img src="add.png" alt="" />
        Generate Question
      </button>
    </div>
  );
};
