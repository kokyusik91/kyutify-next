# Spotify clone with Next.js 13.5.2 🏚

## 실행방법

```shell
npm install

npm run dev
```

## 만드는 과정

### 1. Layout 잡기

기존의 airbnb와는 다르게, app 디렉토리 하위에 바로 page.tsx를 위치 시킨게 아닌, `(site)`라는 디렉토리 하위에 page.tsx를 위치 시켰다.

전체적인 Layout은 Layout.tsx에 작성을 하였다.

```tsx
// app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import SideBar from '@/components/SideBar';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
```

SideBar.tsx에 전체적인 레이아웃이 잡혀있다. 추가로 tailwind-merge를 사용해서 기본적인 스타일 속성을 미리 선언해두고, 추가로 필요한 CSS 속성은 props의 `className`로 넘겨 기존 스타일을 확장시키거나, 오버라이딩을 할 수 있다.

```tsx
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        className={twMerge(
          `
        w-full
        rounded-full
        bg-green-500
        border
        border-transparent
        px-3
        py-3
        disabled:cursor-not-allowed
        disabled:opacity-50
        text-black
        font-bold
        hover:opacity-75
        transition
      `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
```

보는 것처럼 `twMerge()`함수 내부에 미리 지정해 놓을 CSS속성을 입력해 놓는다.
