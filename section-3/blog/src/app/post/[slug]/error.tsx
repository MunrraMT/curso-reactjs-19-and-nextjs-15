'use client';

import ErrorMessage from '@/components/ErrorMessage';
import { ErrorPageProps } from '@/lib/types/error-page-props';

export type SlugRouteErrorPageProps = ErrorPageProps & {};

export default function SlugRouteErrorPage(props: SlugRouteErrorPageProps) {
  return (
    <ErrorMessage
      pageTitle="Slug"
      contentTitle="ERROR"
      content="Error boundary"
    />
  );
}
