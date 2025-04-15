import React from "react";

function CodeBlock({ label, code }) {
  // 복사 버튼 클릭 시, code 문자열을 클립보드에 복사
  // 복사한 후 버튼 위에 "복사 완료!" 메시지 표시
  // 복사 실패 시, alert로 "복사에 실패했습니다." 메시지 표시
  // querySelector에서 CodeBlock에 있는 button을 선택하기 위해 id을 사용
  // 각 button에 다른 id을 부여해야 함, 방법은 2가지
  // 1. id을 props로 받아서 사용
  // 2. button을 클릭한 후, event.target.id로 선택
  // 1번 방법을 사용
  // const button = document.querySelector(`#${id}`);
  // const button = document.querySelector("#copy-button");
  const handleCopy = () => {
    navigator.clipboard.writeText(code)
        .then(() => {
            const button = document.querySelector(`#copy-button-${label}`); // 각 버튼에 고유한 id 부여
            button.innerText = "복사 완료!";
            setTimeout(() => {
            button.innerText = "Copy";
            }, 2000);
        }
    )
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
            id={`copy-button-${label}`} // 각 버튼에 고유한 id 부여
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
