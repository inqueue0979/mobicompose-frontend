import React from "react";

// Next.js 13 App Router에서 전체 레이아웃은 layout.jsx
// <html>과 <body> 태그를 여기에 배치
// 모든 page.jsx를 감싸는 공통 구조

export const metadata = {
  title: "MobiCompose",
  description: "MS2MML to MML 변환 도구",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ margin: 0, padding: 0 }}>
        {/* 공통 레이아웃 상단 (헤더 등) */}
        <header style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
          <h1 style={{ margin: 0 }}>MobiCompose</h1>
        </header>

        {/* 페이지마다 달라지는 부분 */}
        {children}

        {/* 공통 레이아웃 하단 (푸터 등) */}
        <footer style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
          <p>© 2025 MobiCompose</p>
        </footer>
      </body>
    </html>
  );
}
