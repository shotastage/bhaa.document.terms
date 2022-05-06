import ReactMarkdown from 'react-markdown';
import { PrivDocument } from'./docs/PrivPol';

const PrivPage = (): JSX.Element => {
  return <ReactMarkdown children={PrivDocument} />;
}

export default PrivPage;
