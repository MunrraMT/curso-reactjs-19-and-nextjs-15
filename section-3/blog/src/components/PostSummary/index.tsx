import { cssFormatter } from '@/tools/css-formatter';
import { formatDatetime, formatRelativeDate } from '@/tools/format-datetime';
import { PostHeading, PostHeadingProps } from '../PostHeading';
import { PostModel } from '@/models/post/post-model';

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
      <time dateTime={props.createdAt} className="text-slate-600 text-sm/tight">
        {formatDatetime(props.createdAt) +
          ' - ' +
          formatRelativeDate(props.createdAt)}
      </time>
      <PostHeading as={props.heading} href={props.link}>
        {props.title}
      </PostHeading>
      <p>{props.excerpt}</p>
    </div>
  );
}
