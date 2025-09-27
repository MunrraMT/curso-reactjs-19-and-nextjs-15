'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { ErrorPageProps } from '@/lib/types/error-page-props';
import { cssFormatter } from '@/tools/css-formatter';
import { useEffect } from 'react';

export type RootErrorPageProps = ErrorPageProps & {};

export default function RootErrorPage(props: RootErrorPageProps) {
  useEffect(() => {
    console.log(props.error);
  }, [props.error]);

  return (
    <ErrorMessage
      pageTitle="5xx"
      contentTitle="5xx"
      content={
        <button
          className={cssFormatter('border-red-600')}
          onClick={() => {
            props.reset();
          }}
        >
          Clique para tentar novamente
        </button>
      }
    />
  );
}
