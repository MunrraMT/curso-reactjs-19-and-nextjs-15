'use client';

import clsx from 'clsx';

type HeadingProps = {
  text: string;
  className?: string;
};

export function Heading(props: HeadingProps) {
  return (
    <h1
      onClick={() => alert('foi')}
      className={clsx(
        'text-xl font-bold w-full text-blue-500 hover:text-blue-100 bg-blue-100 hover:bg-blue-500 transition duration-300 text-center uppercase py-4',
        props.className,
      )}
    >
      {props.text}
    </h1>
  );
}
