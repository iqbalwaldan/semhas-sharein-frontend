import React from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "./draftEditor.css";

export default function TextEditor2({ value, onChange }) {
  const { quillRef } = useQuill({
    modules: {
      toolbar: "#toolbar2",
    },
    formats: ["bold", "italic", "header", "blockquote", "link", "list"],
  });

  return (
    <div>
      <div id="toolbar2">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-header" value="1"></button>
        <button className="ql-header" value="2"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-link"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-list" value="ordered"></button>
      </div>
      <div ref={quillRef} id="editor2" value={value} onChange={onChange} />
    </div>
  );
}
