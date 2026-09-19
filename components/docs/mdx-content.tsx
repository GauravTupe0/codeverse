import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const components = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="mt-10 scroll-mt-24 text-2xl font-semibold" {...props} />,
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-8 scroll-mt-24 text-xl font-semibold" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mt-4 leading-7 text-muted-foreground" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mt-4 list-disc space-y-2 pl-6" {...props} />,
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => <ol className="mt-4 list-decimal space-y-2 pl-6" {...props} />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => <pre className="my-4 overflow-x-auto rounded-2xl border border-border bg-zinc-950 p-4 text-sm text-zinc-100" {...props} />,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <article className="prose-codeverse max-w-none">
      <MDXRemote
        source={source}
        components={components}
        options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }}
      />
    </article>
  );
}
