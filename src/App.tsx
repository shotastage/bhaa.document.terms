import React from 'react';
import ReactMarkdown from 'react-markdown';
import { HomeDocument } from'./docs/Home';

const App = (): JSX.Element => {

  return (
    <>
      <ReactMarkdown source={HomeDocument} />
    </>
  );
}

export default App;
