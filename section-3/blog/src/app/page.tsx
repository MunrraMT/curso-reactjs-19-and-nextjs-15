import { Suspense } from 'react';

import { SpinLoader } from '@/components/SpinLoader';
import { PostFeatured } from '@/components/PostFeatured';
import PostList from '@/components/PostList';
import { SearchParamsProp } from '@/lib/types/search-params-props';

export type HomePageProps = SearchParamsProp & {};

export default async function HomePage(props: HomePageProps) {
  const { errorBoundary } = await props.searchParams;

  if (errorBoundary !== undefined) {
    throw new Error('Erro geral');
  }

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
