import ErrorMessage from '@/components/ErrorMessage';

export default async function NotFoundPage() {
  return (
    <ErrorMessage
      content="Página não encontrada"
      contentTitle="404"
      pageTitle="Página não encontrada"
    />
  );
}
