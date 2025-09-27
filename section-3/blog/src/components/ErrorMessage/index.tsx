import { cssFormatter } from '@/tools/css-formatter';

export type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  return (
    <>
      <title>{props.pageTitle}</title>

      <div
        className={cssFormatter(
          'min-h-[320px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center',
        )}
      >
        <div>
          <h1 className={cssFormatter('text-7xl/tight mb-4 font-extrabold')}>
            {props.contentTitle}
          </h1>
          <div>{props.content}</div>
        </div>
      </div>
    </>
  );
}
