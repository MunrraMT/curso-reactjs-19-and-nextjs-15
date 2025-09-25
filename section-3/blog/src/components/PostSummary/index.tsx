import { cssFormatter } from '@/tools/css-formatter';
import { PostHeading, PostHeadingProps } from '../PostHeading';
import { PostModel } from '@/models/post/post-model';
import { PostDatetime } from '../PostDatetime';

export type PostSummaryProps = {
  heading: PostHeadingProps['as'];
  link: PostHeadingProps['href'];
  createdAt: PostModel['createdAt'];
  title: PostModel['title'];
  excerpt: PostModel['excerpt'];
};

export function PostSummary(props: PostSummaryProps) {
  return (
    <div className={cssFormatter('flex flex-col gap-2', 'sm:justify-center')}>
      <PostDatetime dateTime={props.createdAt} />
      <PostHeading as={props.heading} href={props.link}>
        {props.title}
      </PostHeading>
      <p className="text-justify line-clamp-4">{props.excerpt}</p>
    </div>
  );
}
