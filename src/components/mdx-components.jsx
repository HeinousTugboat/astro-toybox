import { Blockquote, Code, Em, Heading, Link, Separator, Strong, Text } from '@radix-ui/themes';

export const em = (props) => <Em {...props} />;
export const strong = (props) => <Strong {...props} />;
export const h1 = (props) => <Heading as="h1" size="7" {...props} />;
export const h2 = (props) => <Heading as="h2" size="6" {...props} />;
export const h3 = (props) => <Heading as="h3" size="5" {...props} />;
export const h4 = (props) => <Heading as="h4" size="4" {...props} />;
export const h5 = (props) => <Heading as="h5" size="3" {...props} />;
export const h6 = (props) => <Heading as="h6" size="2" {...props} />;
export const blockquote = (props) => <Blockquote {...props} />;
export const a = (props) => <Link {...props} />;
export const code = (props) => <Code variant="ghost" {...props} />;
export const hr = (props) => <Separator size="4" {...props} />;
export const p = (props) => <Text {...props} />;
