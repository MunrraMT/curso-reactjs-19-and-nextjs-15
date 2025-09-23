import { Suspense } from 'react';
import clsx from 'clsx';

import { SpinLoader } from '@/components/SpinLoader';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import PostList from '@/components/PostList';
import { PostCoverImage } from '@/components/PostCoverImage';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
      >
        <PostCoverImage
          containerLinkProps={{ href: '#' }}
          imageProps={{ alt: '', src: '/images/bryen_0.png' }}
        />
      </section>

      <main>
        <Suspense fallback={<SpinLoader className="min-h-full" />}>
          <PostList />
        </Suspense>
      </main>

      <footer>Footer</footer>
    </Container>
  );
}
