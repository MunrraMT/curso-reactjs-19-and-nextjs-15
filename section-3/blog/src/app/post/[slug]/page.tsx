import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { SinglePost } from '@/components/SinglePost/indext';
import { SpinLoader } from '@/components/SpinLoader';

export type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: PostSlugPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await findBySlugPublicPostsCached(slug).catch(() => {
    notFound();
  });

  return {
    title: post.title,
    description: post.excerpt.slice(1, 100),
  };
}

// export async function generateStaticParams() {
//   const posts = await findAllPublicPostsCached();
//   return posts.map((post) => ({ slug: post.slug }));
// }

export default async function PostSlugPage(props: PostSlugPageProps) {
  const { slug } = await props.params;

  if (slug === 'error-boundary') {
    throw new Error('Erro na slug');
  }

  return (
    <Suspense fallback={<SpinLoader className="min-h-full" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
