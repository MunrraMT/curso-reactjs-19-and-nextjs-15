import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { Suspense } from 'react';
import { SinglePost } from '@/components/SinglePost/indext';
import { SpinLoader } from '@/components/SpinLoader';

export type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  props: PostSlugPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await findBySlugPublicPostsCached(slug).catch((_error) => {
    notFound();
  });
  return {
    title: post.title,
    description: post.excerpt.slice(1, 100),
  };
}

export default async function PostSlugPage(props: PostSlugPageProps) {
  const { slug } = await props.params;
  return (
    <Suspense fallback={<SpinLoader className="min-h-full" />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
