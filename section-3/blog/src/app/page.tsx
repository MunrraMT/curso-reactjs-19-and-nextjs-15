import { Suspense } from 'react';

import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </Container>
  );
}
