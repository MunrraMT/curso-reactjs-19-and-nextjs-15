import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

export type SafeMarkdownProps = {
  markdown: string;
};

export function SafeMarkdown(props: SafeMarkdownProps) {
  return (
    <div>
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
      >
        {props.markdown}
      </ReactMarkdown>
    </div>
  );
}
