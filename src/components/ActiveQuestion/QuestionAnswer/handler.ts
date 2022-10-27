import axios from 'axios';
import { IQuestionItem } from '../../../view';
import { IResponseObj } from '../../Common/types';

export async function requestFeedback(question: string, answer: string) {
  const propmt = `You are a professor in an oral exam at a university. \n
  The question is: ${question}
  The student responds: ${answer} \n
  Evaluate the students answer to the question and give an explanation.{}`;

  const { data } = await axios.post<IResponseObj>(
    'https://api.openai.com/v1/completions',
    {
      model: 'text-ada-001',
      prompt: propmt,
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

  console.log('propmt: ', propmt);
  console.log('data: ', data.choices[0].text);

  return data.choices[0].text;
}
