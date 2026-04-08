import type { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        {/* レイアウト UI */}
        {/* ページまたはネストされたレイアウトをレンダリングしたい場所に children を配置 */}
        <main>{children}</main>
      </body>
    </html>
  );
}
