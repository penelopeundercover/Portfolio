// TODO: Make it downloadable and printable.
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
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
        file={
          process.env.PUBLIC_URL + "/public/Marianne-Seiwert-Resume-ATS.pdf"
        }
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
