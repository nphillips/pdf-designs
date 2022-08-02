import { MDXProvider } from "@mdx-js/react";
import {
  AnimusProvider as Provider,
  Text,
  Li,
  Link,
  Ol,
  Ul,
} from "@animus-ui/components";
import { compatTheme } from "@animus-ui/core";

export const MDXWrapper: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return (
    <Provider theme={compatTheme}>
      <MDXProvider
        components={{
          h1: (props) => <Text as="h1" {...props} />,
          h2: (props) => <Text as="h2" {...props} />,
          h3: (props) => <Text as="h3" {...props} />,
          h4: (props) => <Text as="h4" {...props} />,
          h5: (props) => <Text as="h5" {...props} />,
          h6: (props) => <Text as="h6" {...props} />,
          li: Li,
          a: Link,
          ol: Ol,
          ul: Ul,
          p: Text,
        }}
      >
        {children}
      </MDXProvider>
    </Provider>
  );
};
