import { IQuestionItem } from '../../view';
import {
  IQuestionSuplement,
  IQuestionSuplementItem,
  IResponseObj,
} from '../Common/types';

function formatOuput(value: string) {
  const cleanStr = value.trimStart().replaceAll('\n', '');
  const sub = cleanStr.substring(0, 2);

  console.log(cleanStr);
  console.log('sub: ', sub);

  if (sub === 'Q:' || sub === 'A:') {
    return value.substring(5);
  }

  return value;
}

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
  newItem: string,
  topic: string
) {
  const respStr = newItem.split('?');
  console.log(respStr);

  console.log(respStr[0]);
  const question = formatOuput(respStr[0]);
  const answer = formatOuput(respStr[1]);

  console.log(question);

  setContext([
    ...context,
    {
      question,
      answer,
      topic,
    },
  ]);
}
