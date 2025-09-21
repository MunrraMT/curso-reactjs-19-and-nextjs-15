import { Suspense } from 'react';

import { Heading } from '@/components/Heading';
import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-full" />}>
        <PostList />
      </Suspense>

      <header>
        <Heading text="Header" />
      </header>

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>

      <footer>
        <Heading text="Footer" />
      </footer>

      <Suspense fallback={<SpinLoader className="min-h-full" />}>
        <PostList />
      </Suspense>
    </>
  );
}
