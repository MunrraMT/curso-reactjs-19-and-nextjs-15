import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';
import { cssFormatter } from '@/tools/css-formatter';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDatetime } from '../PostDatetime';

export type SinglePostProps = {
  slug: PostModel['slug'];
};

export async function SinglePost(props: SinglePostProps) {
  const post = await findBySlugPublicPostsCached(props.slug).catch((_error) => {
    notFound();
  });
  return (
    <article className="flex flex-col gap-4">
      <header className="flex flex-col gap-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={720}
          alt={post.title}
        />
        <PostHeading as="h1">{post.title}</PostHeading>
        <p>
          {post.author} | <PostDatetime dateTime={post.createdAt} />
        </p>
      </header>

      <p className="text-xl">{post.excerpt}</p>

      <div>{post.content}</div>
    </article>
  );
}
