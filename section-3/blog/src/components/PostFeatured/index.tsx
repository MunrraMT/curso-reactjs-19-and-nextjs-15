import { PostCoverImage } from '../PostCoverImage';
import { cssFormatter } from '@/tools/css-formatter';
import { PostSummary } from '../PostSummary';
import { findAllPublicPosts } from '@/lib/post/queries';

export async function PostFeatured() {
  const posts = await findAllPublicPosts();
  const post = posts[0];
  const postLink = `/post/${post.slug}`;
  return (
    <section
      className={cssFormatter(
        'grid grid-cols-1 gap-8 mb-16 group',
        'sm:grid-cols-2',
      )}
    >
      <PostCoverImage
        containerLinkProps={{ href: postLink }}
        imageProps={{ alt: post.title, src: post.coverImageUrl }}
      />

      <PostSummary
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        heading={'h1'}
        link={postLink}
        title={post.title}
      />
    </section>
  );
}
