import { notFound } from 'next/navigation';

import { findBySlugPublicPostsCached } from '@/lib/post/queries';
import { PostModel } from '@/models/post/post-model';
import { cssFormatter } from '@/tools/css-formatter';
import Image from 'next/image';
import { PostHeading } from '../PostHeading';
import { PostDatetime } from '../PostDatetime';
import { SafeMarkdown } from '../SafeMarkdown';

export type SinglePostProps = {
  slug: PostModel['slug'];
};

export async function SinglePost(props: SinglePostProps) {
  const post = await findBySlugPublicPostsCached(props.slug).catch((_error) => {
    notFound();
  });
  return (
    <article className={cssFormatter('flex flex-col gap-4')}>
      <header className={cssFormatter('flex flex-col gap-4')}>
        <Image
          className={cssFormatter('rounded-xl')}
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

      <p className={cssFormatter('text-xl')}>{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
