import { Suspense } from 'react';

import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Container } from '@/components/Container';

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="text-6xl font-bold text-center py-8">Aqui é o header</h1>
      </header>

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </Container>
  );
}
