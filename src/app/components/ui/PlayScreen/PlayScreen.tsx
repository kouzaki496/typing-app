import React from 'react';
import TypingArea from '../TypingArea/TypingArea';
import ExampleDisplay from '../ExampleDisplay/ExampleDisplay';

const PlayScreen = () => {
  return (
    <div className="play-screen flex w-full gap-4">
      <ExampleDisplay />
      <TypingArea />
    </div>
  );
};

export default PlayScreen;