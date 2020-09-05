import React from 'react';
import ReactMarkdown from 'react-markdown';
import { TermsDocument } from'./docs/Terms';

const TermsPage = (): JSX.Element => {

  return (
    <>
      <ReactMarkdown source={TermsDocument} />
    </>
  );
}

export default TermsPage;
