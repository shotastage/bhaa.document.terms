import ReactMarkdown from 'react-markdown';
import { TermsDocument } from'./docs/Terms';

const TermsPage = (): JSX.Element => {

  return (
    <>
      <ReactMarkdown children={TermsDocument} />
    </>
  );
}

export default TermsPage;
