import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full pb-16">
      <p className="w-auto py-8 text-center">
        <span>Copyright &copy; {new Date().getFullYear()} - </span>
        <Link href={'/'}>The Blog</Link>
      </p>
    </footer>
  );
}
