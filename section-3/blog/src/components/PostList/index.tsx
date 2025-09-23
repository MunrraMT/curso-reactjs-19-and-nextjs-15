import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { cssFormatter } from '@/tools/css-formatter';
import { PostSummary } from '../PostSummary';

export default async function PostList() {
  const posts = await postRepository.findAll();
  const postLink = (slug: string) => `/post/${slug}`;
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
            containerLinkProps={{ href: postLink(post.slug) }}
            imageProps={{ alt: post.title, src: post.coverImageUrl }}
          />

          <PostSummary
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            heading={'h2'}
            link={postLink(post.slug)}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
