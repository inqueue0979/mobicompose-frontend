import React from "react";

function CodeBlock({ label, code }) {
  // 복사 버튼 클릭 시, code 문자열을 클립보드에 복사
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
      .then(() => alert(`${label} 복사 완료!`))
      .catch(() => alert('복사에 실패했습니다.'));
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <h4 style={{ marginBottom: "0.5rem" }}>{label}</h4>
      {/* 배경, 스크롤, 코드블록 스타일 */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#2f2f2f",
          color: "#f8f8f2",
          padding: "1rem",
          borderRadius: "4px",
          overflowX: "auto",       // 가로스크롤 허용
          whiteSpace: "pre-wrap",  // 줄바꿈 가능 (pre-wrap)
          fontFamily: "monospace",
        }}
      >
        {/* 복사 버튼 */}
      <button
          onClick={handleCopy}
          style={{
            position: "absolute",
            top: "0.5rem",
            left: "0.5rem",
            backgroundColor: "#444",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Copy
        </button>
        {/* 패딩 왼쪽에 주기 */}
        <pre style={{ margin: "0", marginLeft: "4rem" }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBlock;
