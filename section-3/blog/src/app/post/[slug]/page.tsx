import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { cssFormatter } from '@/tools/css-formatter';

export type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage(props: PostSlugPageProps) {
  const { slug } = await props.params;
  const post = await findBySlugPublicPostsCached(slug).catch((_error) => {
    notFound();
  });
  return (
    <h1 className={cssFormatter('text-5xl font-extrabold py-16')}>
      {post.title}
    </h1>
  );
}
