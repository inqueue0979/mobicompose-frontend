import React from "react";
import UploadForm from "./components/UploadForm";

// 기본적으로 page.jsx는 Server Component
// 여기서는 별도 "use client"를 쓰지 않고, Client Component를 import해서 사용

export default function Page() {
  return (
    <main>
      {/* UploadForm (Client Component) */}
      <UploadForm />
    </main>
  );
}
