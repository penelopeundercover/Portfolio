//TODO: Fix annotation issues.
// TODO: Make it downloadable and printable.
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../styling/Resume.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  return (
    <div>
      <Document
        file={process.env.PUBLIC_URL + "/Marianne-Seiwert-Resume-ATS.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page
          className="resumePage"
          pageNumber={1}
          renderAnnotationLayer={true}
          externalLinkTarget="_blank"
          renderTextLayer={false}
        />
      </Document>
      <p>Page {pageNumber}</p>
    </div>
  );
}

export default Resume;
