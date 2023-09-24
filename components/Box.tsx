import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: ReactNode;
  className?: string;
}

function Box({ children, className }: BoxProps) {
  return (
    <div
      className={twMerge(
        `
    bg-neutral-900
    rounded-lg
    h-hit
    w-full
  `,
        className
      )}
    >
      {children}
    </div>
  );
}

export default Box;
