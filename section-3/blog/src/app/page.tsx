import { Heading } from '@/components/Heading';
import { SpinLoader } from '@/components/SpinLoader';

export default function HomePage() {
  console.log('HomePage');

  return (
    <header>
      <Heading text="Olá dentro da página" />
      <SpinLoader className="min-h-40" />
    </header>
  );
}
