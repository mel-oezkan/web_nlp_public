import { IQuestionSuplement } from '../Common/types';
// import {Categories } from '../Common/commons';

export const propmtSuplement: IQuestionSuplement = {
  Neurobiology: [
    {
      question:
        'Which cell types other than nerve cells can produce action potentials?',
      answer: 'Skeletal muscle cells',
    },
    {
      question: "How does calcium enter a neuron's cell body?",
      answer: 'Through voltage-gated calcium channels',
    },
    {
      question:
        "What is the name of the process by which a neuron's membrane potential is restored to its resting potential?",
      answer: 'Repolarization',
    },
    {
      question: 'Name the glial cell that produces myelin.',
      answer: 'Oligodendrocytes',
    },
    {
      question:
        'Which gilal cells are contained in the central nervous system?',
      answer: 'Oligodendrocytes, astrocytes, and microglia.',
    },
  ],
  'Artificial Intelligence': [
    {
      question:
        'Which search method is suitable if cost and a heuristic function are given?',
      answer: 'A* search',
    },
    {
      question: 'What do the edges of a constrain graph represent?',
      answer: 'The binary constraints',
    },
    {
      question: 'What does a markov decision process consist of?',
      answer:
        'A set of states, a set of actions, a transition model, and a reward function.',
    },
    {
      question:
        'Let A, B and C be three events such that A and B are conditionally independent given C. What is necessarily true?',
      answer: 'B and A are conditionally independent given C.',
    },
  ],
  'Computational Linguistics': [
    {
      question:
        'When using model-theoretic semantics, how do we usaully represent relations (e.g. Owns) in the formal model?',
      answer: 'Sets of tuples of elements of the domain',
    },
    {
      question:
        'Which type of semantic processing is most dependant upon a prior parsing system?',
      answer: 'Compositional semantics',
    },
    {
      question: 'When can quantifier scope ambiguity arise?',
      answer:
        'In the presence of one existential quantifier and one universal quantifier',
    },
    { question: 'What is a synonym for superordinate?', answer: 'hypernym' },
    {
      question:
        'Which thematic roles are in play in the sentence The city has built a new metro line?',
      answer: 'Agent and result',
    },
  ],
};
