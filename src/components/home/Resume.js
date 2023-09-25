import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../slicers/resumeDataSlice';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [pdfBlobURL, setPDFBlobURL ] = useState(null);
  const isError = useSelector((state) => state.resume.isError);
  const dispatch = useDispatch();
  const pdfPath = 'https://waalkesjoshua.github.io/MyPortfolio/Joshua_Waalkes_Resume.pdf';
  let today = new Date();

  const downloadPDF = async () => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = pdfBlobURL;
    a.download = 'Joshua_Waalkes_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await fetch(pdfPath);
        if(!response.ok) {
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
  }, [])


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
        <p>{`Test from ${today}`}</p>
      <Document
        file={pdfBlobURL}
        onLoadError={() => {
          dispatch(setError(true));
        }}
      >
        <Page
          pageNumber={1}
          width={600}
          height={600}
          renderTextLayer={false} // Disable text layer
          renderAnnotationLayer={false} //Disable annotations
        />
      </Document>
    <button onClick={downloadPDF}>Download</button>
    {isError &&
        <h6>Error Downloading Resume</h6>}
    </ div>
  );
}