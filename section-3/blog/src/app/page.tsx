import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PostList from '@/components/PostList';
import { SpinLoader } from '@/components/SpinLoader';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import clsx from 'clsx';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section
        className={clsx('grid grid-cols-1 gap-8 mb-16 group', 'sm:grid-cols-2')}
      >
        <Link className="size-full overflow-hidden rounded-xl" href="#">
          <Image
            className={clsx(
              'transition duration-300 size-full object-cover object-center',
              'group-hover:scale-105',
            )}
            width={1200}
            height={720}
            alt=""
            src="/images/bryen_0.png"
            priority
            fetchPriority="high"
            loading="eager"
          />
        </Link>

        <div className={clsx('flex flex-col gap-2', 'sm:justify-center')}>
          <time dateTime="2025-04-20" className="text-slate-600 text-sm/tight">
            20/04/2025
          </time>

          <h1 className={clsx('text-2xl/tight font-extrabold', 'sm:text-4xl')}>
            <Link href={'#'}>Lorem ipsum dolor sit, amet consectetur</Link>
          </h1>

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
