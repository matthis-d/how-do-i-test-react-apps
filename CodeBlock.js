import React from 'react';

const style = {
  fontFamily: '"Roboto Mono", monospace',
  color: '#fd0',
  backgroundColor: '#000'
};

const CodeBlock = ({ children }) => <code style={style}>{children}</code>;

export default CodeBlock;
