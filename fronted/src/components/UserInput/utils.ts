export function split_response(req_data: any) {
  const request = req_data.choices[0].text.split('?');

  const question = request[0];
  const answer = request[1];

  return {
    question: question,
    answer: answer,
  };
}

interface IChoiceItem {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason: string;
}

interface IUsageObj {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface IResponseObj {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: IChoiceItem[];
  usage: IUsageObj;
}
