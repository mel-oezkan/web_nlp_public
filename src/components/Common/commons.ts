export const questionTypesItems = [
  //   // { name: 'mc', value: 'Multiple Choice' },
  //   //{ name: 'tf', value: 'True/False' },
  {
    name: 'qa',
    value: 'Question Answer',
    icon: {
      white: 'input_white.png',
      black: 'input_black.png',
    },
  },

  {
    name: 'fl',
    value: 'Flip',
    icon: {
      white: 'flip_white.png',
      black: 'flip_black.png',
    },
  },
];

export const questionDifficulties = [
  { value: 'easy', name: 'Easy' },
  { value: 'medium', name: 'Medium' },
  { value: 'hard', name: 'Hard' },
];

export enum Categories {
  AI = 'Artificial Intelligence',
  CL = 'Computational Linguistics',
  NEURO = 'Neurobiology',
  CUSTOM = 'Custom',
}

export const categoryOptions = [
  'Artificial Intelligence',
  'Computational Linguistics',
  'Neurobiology',
  'Custom',
];

export const questionCategories = [
  { name: 'Artificial Intelligence', value: Categories.AI },
  { name: 'Neurobiology', value: Categories.NEURO },
  { name: 'Computational Linguistics', value: Categories.CL },
  { name: 'Custom', value: Categories.CUSTOM },
];
