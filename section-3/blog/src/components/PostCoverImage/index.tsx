import Image from 'next/image';
import Link from 'next/link';

import { cssFormatter } from '@/tools/css-formatter';

type PostCoverImageProps = {
  containerLinkProps: React.ComponentProps<typeof Link>;
  imageProps: React.ComponentProps<typeof Image>;
};

export function PostCoverImage(props: PostCoverImageProps) {
  return (
    <Link
      {...props.containerLinkProps}
      className={cssFormatter(
        'size-full overflow-hidden rounded-xl',
        props.containerLinkProps?.className,
      )}
    >
      <Image
        {...props.imageProps}
        className={cssFormatter(
          'transition duration-300 size-full object-cover object-center',
          'group-hover:scale-105',
          props.imageProps?.className,
        )}
        width={props.imageProps?.width || 1200}
        height={props.imageProps?.height || 720}
      />
    </Link>
  );
}
