import React, { useState } from "react";
import CodeBlock from "./CodeBlock";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState(null);

  const API_URL = "https://mobicompose-production.up.railway.app/convert";

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0] || null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("ms2mml 파일을 선택하세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      // data = { converted: {...} } 형태라고 가정
      setResult(data.converted);
    } catch (err) {
      console.error(err);
      alert("업로드 오류가 발생했습니다.");
    }
  };

  return (
    <div style={{ padding: "2rem", color: "#fff", backgroundColor: "#1e1e1e" }}>
      <h1>MobiCompose (MS2MML to MML) 변환기</h1>
      <p>
        ms2mml 파일을 선택한 뒤, <strong>업로드</strong> 버튼을 누르면 변환된
        MML 정보를 확인할 수 있습니다.
      </p>

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".ms2mml"
          style={{ marginRight: "1rem" }}
        />
        <button onClick={handleUpload}>업로드</button>
      </div>

      {result && (
        <div>
          <h2>변환 결과(JSON):</h2>

          {/* result 객체의 키-값을 돌면서 각각 CodeBlock으로 */}
          {Object.entries(result).map(([key, code]) => (
            <CodeBlock key={key} label={key} code={code} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
