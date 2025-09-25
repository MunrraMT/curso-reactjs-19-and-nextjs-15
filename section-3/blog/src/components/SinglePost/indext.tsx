import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';
import { cssFormatter } from '@/tools/css-formatter';

export type SinglePostProps = {
  slug: PostModel['slug'];
};

export async function SinglePost(props: SinglePostProps) {
  const post = await findBySlugPublicPostsCached(props.slug).catch((_error) => {
    notFound();
  });
  return (
    <h1 className={cssFormatter('text-5xl font-extrabold py-16')}>
      {post.title}
    </h1>
  );
}
