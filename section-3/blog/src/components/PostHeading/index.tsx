import Link from 'next/link';

import { cssFormatter } from '@/tools/css-formatter';

export type PostHeadingProps = {
  children: React.ReactNode;
  href?: string;
  as: 'h1' | 'h2' | 'h3';
};

export function PostHeading(props: PostHeadingProps) {
  const headingClassesMap: Record<PostHeadingProps['as'], string> = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight sm:text-3xl font-bold',
    h3: 'text-2xl/tight sm:text-2xl',
  };

  return (
    <props.as
      className={cssFormatter(headingClassesMap[props.as], 'line-clamp-2')}
    >
      {props.href ? (
        <Link href={props.href}>{props.children}</Link>
      ) : (
        props.children
      )}
    </props.as>
  );
}
