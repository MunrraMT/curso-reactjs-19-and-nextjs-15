import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { cssFormatter } from '@/tools/css-formatter';

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

      <div className={cssFormatter('flex flex-col gap-2', 'sm:justify-center')}>
        <time dateTime="2025-04-20" className="text-slate-600 text-sm/tight">
          20/04/2025
        </time>

        <PostHeading as="h1" href="#">
          Lorem ipsum dolor sit, amet consectetur
        </PostHeading>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, minima
          quasi. Aliquid hic provident tempore molestiae recusandae impedit
          aspernatur, enim dolor corrupti et sint natus, possimus, quia nemo
          magnam. Iusto, quia consequatur! Alias quas perspiciatis beatae, et
          error, nobis, optio dicta enim modi natus voluptate aliquam iusto
          itaque ipsa magni.
        </p>
      </div>
    </section>
  );
}
