import React from 'react';
import { useState } from 'react';
import { basicSetup } from "@uiw/codemirror-extensions-basic-setup";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { oneDark } from "@codemirror/theme-one-dark";
import { useCodeMirror } from "@uiw/react-codemirror";


const TypingArea = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = React.useCallback((value: string) => {
    setValue(value);
  }, []);

  const customTheme = EditorView.theme({
    ".cm-content": { minHeight: "380px" },
  });

  const { setContainer } = useCodeMirror({
    value,
    extensions: [
      basicSetup(),
      oneDark,
      EditorView.lineWrapping,
      customTheme,
    ],
    theme: "dark",
    onChange: handleChange,
  });

  return (
    <div className="typing-area w-full">
      <div
        ref={setContainer}
        className="editor-container h-96 min-h-[400px] border border-gray-300 rounded-md overflow-auto p-2"
      />
    </div>
  );
};

export default TypingArea;
