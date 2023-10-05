import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../slicers/resumeDataSlice';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [pdfBlobURL, setPDFBlobURL] = useState(null);
  const [pdfDimension, setPdfDimensions] = useState({ width: 0 })
  const isError = useSelector((state) => state.resume.isError);
  const dispatch = useDispatch();
  const pdfPath = 'https://waalkesjoshua.github.io/MyPortfolio/Joshua_Waalkes_Resume.pdf';

  const downloadPDF = async () => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = pdfBlobURL;
    a.download = 'Joshua_Waalkes_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(pdfPath);
        if (!response.ok) {
          throw new Error('Failed to fetch pdf');
          dispatch(setError(true));
        }
        const pdfBlob = await response.blob();
        const url = URL.createObjectURL(pdfBlob);
        setPDFBlobURL(url);
      } catch (error) {
        console.error(error);
        dispatch(setError(true));
      }
    };
    fetchData();

    const containerWidth = document.getElementById('resume-section').offsetWidth;
    const newDimensions = {
      width: containerWidth * .5
    };
    setPdfDimensions(newDimensions);
  }, [])


  return (
    <div>
      <Document
        file={pdfBlobURL}
      >
        <Page
          pageNumber={1}
          width={pdfDimension.width}
          renderTextLayer={false} // Disable text layer
          renderAnnotationLayer={false} //Disable annotations
        />
      </Document>
      <button className="download-resume-button" onClick={downloadPDF}>Download</button>
      {isError &&
        <h6>Error Downloading Resume</h6>}
    </ div>
  );
}