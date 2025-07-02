declare module 'react-linkify' {
  import type { ReactNode } from 'react';

  interface LinkifyProps {
    children: ReactNode;
    componentDecorator?: (href: string, text: string, key: number) => ReactNode;
    hrefDecorator?: (href: string) => string;
    textDecorator?: (text: string) => string;
  }

  const Linkify: React.FC<LinkifyProps>;
  export default Linkify;
}
