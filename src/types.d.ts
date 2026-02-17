declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.svg?url' {
  const value: string;
  export default value;
}

declare module '*.gif' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.otf' {
  const value: string;
  export default value;
}

declare module '*.OTF' {
  const value: string;
  export default value;
}

declare module '*.ttf' {
  const value: string;
  export default value;
}

declare module '*.woff' {
  const value: string;
  export default value;
}

declare module '*.woff2' {
  const value: string;
  export default value;
}

declare module '*.eot' {
  const value: string;
  export default value;
}
