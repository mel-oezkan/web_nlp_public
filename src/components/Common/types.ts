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

export interface IQuestionSuplementItem {
  question: string;
  answer: string;
}

export interface IQuestionSuplement {
  [key: string]: IQuestionSuplementItem[];
}
