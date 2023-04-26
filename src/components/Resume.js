// Future: Use react pdf viewer for resume.
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import "../styling/Resume.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div>
      <Document
        file="./Marianne-Seiwert-Resume-ATS.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Resume;
