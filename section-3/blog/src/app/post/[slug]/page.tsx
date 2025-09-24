import { cssFormatter } from '@/tools/css-formatter';

export type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage(props: PostSlugPageProps) {
  const { slug } = await props.params;
  return (
    <h1 className={cssFormatter('text-5xl font-extrabold py-16')}>{slug}</h1>
  );
}
