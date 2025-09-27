import { cssFormatter } from '@/tools/css-formatter';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

export type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown(props: SafeMarkdownProps) {
  return (
    <div
      className={cssFormatter(
        'w-full max-w-none overflow-hidden',
        'prose prose-slate prose-a:text-blue-500 prose-a:transition prose-a:no-underline',
        'lg:prose-lg',
        'prose-a:hover:text-blue-700 prose-a:hover:underline',
        'prose-img:mx-auto',
      )}
    >
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {props.markdown}
      </ReactMarkdown>
    </div>
  );
}
