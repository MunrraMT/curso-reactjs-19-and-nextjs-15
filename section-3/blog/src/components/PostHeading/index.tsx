import clsx from 'clsx';
import Link from 'next/link';

type PostHeadingProps = {
  children: React.ReactNode;
  href: string;
  as: 'h1' | 'h2' | 'h3';
};

export function PostHeading(props: PostHeadingProps) {
  const headingClassesMap: Record<PostHeadingProps['as'], string> = {
    h1: 'text-2xl/tight sm:text-4xl',
    h2: 'text-2xl/tight sm:text-4xl',
    h3: 'text-2xl/tight sm:text-4xl',
  };

  return (
    <props.as className={clsx(headingClassesMap[props.as], 'font-extrabold')}>
      <Link href={props.href}>{props.children}</Link>
    </props.as>
  );
}
