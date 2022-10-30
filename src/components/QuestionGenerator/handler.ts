import axios from 'axios';
import { model } from '../../config';
import { Categories } from '../Common/commons';
import { IResponseObj } from '../Common/types';
import { propmtSuplement } from './suplements';
import { stringifyQuestionSuplements } from './utils';

export async function requestCompletion(topic: string, difficulty: string) {
  const additionalQuestionList = propmtSuplement[topic];
  const additionalQuestions = stringifyQuestionSuplements(
    additionalQuestionList
  );

  const input = `You are a professor in an oral exam at a university.
  The subject is ${topic}. Ask me a ${difficulty} knowledge question about the subject and answer it
  in a new line.{}`;

  console.log('propmpt: \n', input);

  const { data } = await axios.post<IResponseObj>(
    'https://api.openai.com/v1/completions',
    {
      // 'text-ada-001'
      model,
      prompt: input,
      max_tokens: 100,
      temperature: 0.8,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop: ['<<END>>'],
    },
    {
      headers: {
        Authorization:
          'Bearer REDACTED_API_KEY',
      },
    }
  );

  console.log(data);
  return data.choices[0].text;
}
