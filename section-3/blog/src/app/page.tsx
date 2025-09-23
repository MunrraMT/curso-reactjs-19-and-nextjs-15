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

        <div className={clsx('flex flex-col gap-2', 'sm:justify-center')}>
          <time dateTime="2025-04-20" className="text-slate-600 text-sm/tight">
            20/04/2025
          </time>

          <PostHeading as="h1" href="#">
            Lorem ipsum dolor sit, amet consectetur
          </PostHeading>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est,
            minima quasi. Aliquid hic provident tempore molestiae recusandae
            impedit aspernatur, enim dolor corrupti et sint natus, possimus,
            quia nemo magnam. Iusto, quia consequatur! Alias quas perspiciatis
            beatae, et error, nobis, optio dicta enim modi natus voluptate
            aliquam iusto itaque ipsa magni.
          </p>
        </div>
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
