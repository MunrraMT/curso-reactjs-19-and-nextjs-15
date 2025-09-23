import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { cssFormatter } from '@/tools/css-formatter';
import { formatDatetime, formatRelativeDate } from '@/tools/format-datetime';

export default async function PostList() {
  const posts = await postRepository.findAll();
  return (
    <div
      className={cssFormatter(
        'grid grid-cols-1 gap-8',
        'sm:grid-cols-2',
        'lg:grid-cols-3',
      )}
    >
      {posts.map((post) => (
        <div key={post.id} className="group flex flex-col gap-4">
          <PostCoverImage
            containerLinkProps={{ href: `/post/${post.slug}` }}
            imageProps={{ alt: post.title, src: post.coverImageUrl }}
          />

          <div
            className={cssFormatter('flex flex-col gap-2', 'sm:justify-center')}
          >
            <time
              dateTime={post.createdAt}
              className="text-slate-600 text-sm/tight"
            >
              {formatDatetime(post.createdAt) +
                ' - ' +
                formatRelativeDate(post.createdAt)}
            </time>
            <PostHeading as="h2" href={`/post/${post.slug}`}>
              {post.title}
            </PostHeading>
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
