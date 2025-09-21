'use client';

type HeadingProps = {
  text: string;
};

export function Heading(props: HeadingProps) {
  console.log('Heading');

  return (
    <h1
      onClick={() => alert('foi')}
      className="text-xl font-bold w-full text-blue-500 hover:text-blue-100 bg-blue-100 hover:bg-blue-500 transition duration-300 text-center uppercase py-4"
    >
      {props.text}
    </h1>
  );
}
