// Future: Use react pdf viewer for resume.
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/exm/entry.webpack";
import "../styling/Resume.css";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  
  return (
    <div>
      <nav>
 
      </nav>
  </div>>
  );
};

export default Resume;
