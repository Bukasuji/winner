import { memo, SVGProps } from 'react';

const Polygon1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M19.1124 9.33708L4.9382 17.2383L4.9382 1.43581L19.1124 9.33708Z' fill='white' />
  </svg>
);

const Memo = memo(Polygon1Icon);
export { Memo as Polygon1Icon };
