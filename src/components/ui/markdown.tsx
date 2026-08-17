import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { ComponentPropsWithoutRef } from 'react';

type MarkdownProps = {
  children: string;
  className?: string;
};

export const Markdown = ({ children, className = '' }: MarkdownProps) => {
  return (
    <div className={`markdown-body ${className}`}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{
          a: ({ href, children: linkChildren, ...props }: ComponentPropsWithoutRef<'a'>) => (
            <a
              href={href}
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noreferrer' : undefined}
              {...props}
            >
              {linkChildren}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
