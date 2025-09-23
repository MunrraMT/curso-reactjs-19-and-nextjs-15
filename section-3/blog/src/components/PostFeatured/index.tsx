import { PostCoverImage } from '../PostCoverImage';
import { cssFormatter } from '@/tools/css-formatter';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  return (
    <section
      className={cssFormatter(
        'grid grid-cols-1 gap-8 mb-16 group',
        'sm:grid-cols-2',
      )}
    >
      <PostCoverImage
        containerLinkProps={{ href: '#' }}
        imageProps={{ alt: '', src: '/images/bryen_0.png' }}
      />

      <PostSummary
        createdAt={new Date().toISOString()}
        excerpt={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, minima
          quasi. Aliquid hic provident tempore molestiae recusandae impedit
          aspernatur, enim dolor corrupti et sint natus, possimus, quia nemo
          magnam. Iusto, quia consequatur! Alias quas perspiciatis beatae, et
          error, nobis, optio dicta enim modi natus voluptate aliquam iusto
          itaque ipsa magni.`}
        heading={'h1'}
        link={'/'}
        title={'Lorem ipsum dolor sit, amet consectetur'}
      />
    </section>
  );
}
