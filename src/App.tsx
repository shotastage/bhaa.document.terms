import React from 'react';
import ReactMarkdown from 'react-markdown';
import { HomeDocument } from'./docs/Home';

const App = (): JSX.Element => {

  return (
    <>
      <h1>Bhaa Terms and Privacy Policy Page</h1>
      <p>このページはBhaaの利用規約及びプライバシーポリシーを記述したページです。  </p>
      <li>
        <ul><a href="/terms">Terms of Use</a></ul>
        <ul><a href="/priv">Privacy Policy</a></ul>
      </li>
    </>
  );
}

export default App;
