import axios from 'axios';
import { useState } from 'react';
export default function useFeedbackHandler() {
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState(false);
  const [testValue, setTestValue] = useState(0);

  async function generateValue() {
    await setTestValue(Math.random() * 100);
  }

  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
  // @ts-nocheck
  async function generateFeedback(srcQuestion: string, answer: string) {
    await axios
      .get('')
      .then(resp => {})
      .catch(err => {
        if (axios.isAxiosError(err)) {
          console.log(err.response);
        } else {
          console.log(err);
        }
      });

    await new Promise(r => setTimeout(r, 2000));
    console.log('hallo');
  }

  function updateValue(value: number) {
    setTestValue(value);
  }

  return { feedback, generateFeedback };
}
