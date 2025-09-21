import { Suspense } from 'react';

import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';

export default async function HomePage() {
  return (
    <div className="text-slate-900 dark:text-slate-100 bg-slate-100 dark:bg-slate-900 min-h-screen">
      <header>Aqui é o header</header>

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </div>
  );
}
