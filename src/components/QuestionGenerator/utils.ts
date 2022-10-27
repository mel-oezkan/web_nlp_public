import { IQuestionItem } from '../../view';
import {
  IQuestionSuplement,
  IQuestionSuplementItem,
  IResponseObj,
} from '../Common/types';

function stringifySuplementItem(item: IQuestionSuplementItem) {
  return `Q: ${item.question} \nA: ${item.answer}
`;
}

export function stringifyQuestionSuplements(items: IQuestionSuplementItem[]) {
  if (!items) return '';
  return items.reduce(
    (prev: string, curr) => prev + stringifySuplementItem(curr) + '\n',
    '\n'
  );
}

export function addToStorage(
  context: IQuestionItem[],
  setContext: (value: IQuestionItem[]) => void,
  newItem: IResponseObj,
  topic: string
) {
  const respStr = newItem.choices[0].text.split('?');

  const question = respStr[0] + '?';
  const answer = respStr[1];

  setContext([
    ...context,
    {
      question,
      answer,
      topic,
    },
  ]);
}
