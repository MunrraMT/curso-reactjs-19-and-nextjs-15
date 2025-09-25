import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { cssFormatter } from '@/tools/css-formatter';

export type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage(props: PostSlugPageProps) {
  const { slug } = await props.params;
  let post;
  try {
    post = await findBySlugPublicPostsCached(slug);
  } catch (error) {
    console.log(error);
  }
  if (!post) notFound();
  return (
    <h1 className={cssFormatter('text-5xl font-extrabold py-16')}>
      {post.title}
    </h1>
  );
}
