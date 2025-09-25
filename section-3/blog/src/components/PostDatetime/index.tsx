import { PostModel } from '@/models/post/post-model';
import { formatDatetime, formatRelativeDate } from '@/tools/format-datetime';

export type PostDatetimeProps = {
  dateTime: PostModel['createdAt'];
};

export function PostDatetime(props: PostDatetimeProps) {
  return (
    <time dateTime={props.dateTime} className="text-slate-600 text-sm/tight">
      {formatDatetime(props.dateTime) +
        ' - ' +
        formatRelativeDate(props.dateTime)}
    </time>
  );
}
