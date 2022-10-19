import React, { useState } from 'react';
import axios from 'axios';
import { IQuestionItem } from '../../view';
import { Dropdown } from '../Common/Dropdown';
import {
  questionDifficulties,
  questionTypes,
  questionCategories,
} from './dropdown_options';
import './style.scss';
import { IResponseObj } from './utils';

export default function UserInput({
  questionBuffer,
  setQuestionBuffer,
  setActiveIndex,
}: {
  questionBuffer: IQuestionItem[];
  setActiveIndex: (value: number) => void;
  setQuestionBuffer: (value: IQuestionItem[]) => void;
}) {
  const [activeType, setActiveType] = useState('');
  const [activeDiff, setActiveDiff] = useState('');
  const [activeCate, setActiveCate] = useState('');

  const [error, setError] = useState('');

  async function requestGeneration() {
    setError('');

    if (!activeDiff || !activeCate) {
      setError('Please select all options');
      return;
    }

    const input = `You are a professor in an oral exam at a university.
    The subject is ${activeCate}. Ask me a ${activeDiff} knowledge question about the subject and answer it
    in a new line.{}`;

    try {
      const { data } = await axios.post<IResponseObj>(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-ada-001',
          prompt: input,
          max_tokens: 100,
          temperature: 0.8,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ['{}'],
        },
        {
          headers: {
            Authorization:
              'Bearer REDACTED_API_KEY',
          },
        }
      );

      console.log(data);
      const respStr = data.choices[0].text.split('?');

      const question = respStr[0] + '?';
      const answer = respStr[1];

      setQuestionBuffer([
        ...questionBuffer,
        {
          question: question,
          answer: answer,
        },
      ]);

      setActiveIndex(questionBuffer.length);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        setError(error.response?.data);
      } else {
        console.log(error);
      }
    }
  }

  function handleSubmit() {
    console.log('added question');
  }

  return (
    <div className="UserInput">
      <Dropdown
        title="Question Type"
        options={questionTypes}
        active={activeType}
        setActive={setActiveType}
        imgSrc="question_type.png"
      />
      <Dropdown
        title="Quesiton Difficulty"
        options={questionDifficulties}
        active={activeDiff}
        setActive={setActiveDiff}
        imgSrc="question_difficulty.png"
      />
      <Dropdown
        title="Question Category"
        options={questionCategories}
        active={activeCate}
        setActive={setActiveCate}
        imgSrc="question_category.png"
      />

      {error && <p id="requestError">{error}</p>}

      <button onClick={() => requestGeneration()}>
        <img src="add.png" alt="" />
        Generate Question
      </button>
    </div>
  );
}
