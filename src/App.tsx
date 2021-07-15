import React from 'react';

const App: React.FC = (): JSX.Element => {

  return (
    <>
      <h1>Bhaa Terms and Privacy Policy Page</h1>
      <p>このページはBhaaの利用規約及びプライバシーポリシーを記述したページです。</p>
      <ul>
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/priv">Privacy Policy</a></li>
      </ul>
    </>
  );
}

export default App;
