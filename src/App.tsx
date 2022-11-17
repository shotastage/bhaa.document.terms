import React from 'react';
import { List, Link } from './components/Link';

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <h1>Bhaa Terms and Privacy Policy Page</h1>
      <p>このページはBhaaの利用規約及びプライバシーポリシーを記述したページです。</p>
      <ul style={{ margin: 0, marginTop: "20px" }}>
        <List><Link href="/terms">Terms of Use</Link></List>
        <List><Link href="/priv">Privacy Policy</Link></List>
      </ul>
    </>
  );
}

export default App;
