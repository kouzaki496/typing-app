import React from 'react';
import TypingArea from '../TypingArea/TypingArea';
import ExampleDisplay from '../ExampleDisplay/ExampleDisplay';

const GameScreen = () => {
  return (
    <div className="coding-area flex w-full gap-4">
      <ExampleDisplay />
      <TypingArea />
    </div>
  );
};

export default GameScreen;