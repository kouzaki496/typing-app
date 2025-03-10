import React from 'react';
import { useState } from 'react';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { useCodeMirror } from '@uiw/react-codemirror';

const TypingArea = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const { setContainer } = useCodeMirror({
    value,
    extensions: [basicSetup],
    onChange: handleChange,
  });

  return (
    <div className="typing-area">
      <div ref={setContainer} className="editor-container" />
    </div>
  );
};

export default TypingArea;
