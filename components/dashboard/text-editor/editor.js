import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import "./draftEditor.css";

export default function TextEditor({ content }) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: "#toolbar",
    },
    formats: ["bold", "italic", "header", "blockquote", "link", "list"],
  });

  const [value, setValue] = useState("");
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        // console.log(quillRef.current.firstChild.innerHTML);
        const editorValue = quillRef.current.firstChild.innerHTML;
        setValue(editorValue);
        content(editorValue);
      });
    }
  }, [quill, quillRef, content]);
  return (
    <div>
      <div id="toolbar">
        <button className="ql-bold"></button>
        <button className="ql-italic"></button>
        <button className="ql-header" value="1"></button>
        <button className="ql-header" value="2"></button>
        <button className="ql-blockquote"></button>
        <button className="ql-link"></button>
        <button className="ql-list" value="bullet"></button>
        <button className="ql-list" value="ordered"></button>
      </div>
      <div ref={quillRef} id="editor">
        {content}
      </div>
      {/* <div ref={quillRef} id="editor" /> */}
    </div>
  );
}
