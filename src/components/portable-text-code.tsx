import SyntaxHighlighter from "react-syntax-highlighter";

// import { nord } from "react-syntax-highlighter/dist/esm/styles/hljs";

export function PortableTextCode({ node }: { node: any }) {
  return <SyntaxHighlighter language={node.language}>{node.code}</SyntaxHighlighter>;
}
