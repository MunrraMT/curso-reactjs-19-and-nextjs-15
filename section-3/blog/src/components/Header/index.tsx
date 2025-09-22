import clsx from 'clsx';
import Link from 'next/link';

type HeadingProps = {
  className?: string;
};

export function Header(props: HeadingProps) {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8',
          'sm:text-5xl/normal sm:py-10',
          'md:text-6xl/normal md:py-11',
          'lg:text-7xl/normal lg:py-12',
          props.className,
        )}
      >
        <Link href="#">The Blog</Link>
      </h1>
    </header>
  );
}
