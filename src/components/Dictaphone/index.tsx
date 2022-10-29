import React from 'react';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import './style.scss';

export const Dictaphone = ({
  setContext,
}: {
  setContext: (value: string) => void;
}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();
    return SpeechRecognition.startListening({ continuous: true });
  };

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <button
        className="DictButton"
        style={{ backgroundColor: listening ? 'green' : 'lightgray' }}
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={() => {
          SpeechRecognition.stopListening();
          setContext(transcript);
        }}
      >
        <img src="micro_white.png" alt="" />
      </button>
    </div>
  );
};
