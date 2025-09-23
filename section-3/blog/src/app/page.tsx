import { Suspense } from 'react';

import { SpinLoader } from '@/components/SpinLoader';
import { PostFeatured } from '@/components/PostFeatured';
import PostList from '@/components/PostList';

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-full" />}>
        <PostFeatured />
      </Suspense>

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>
    </>
  );
}
