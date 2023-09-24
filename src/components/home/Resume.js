import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../slicers/resumeDataSlice';
import dotenv from 'dotenv';
dotenv.config();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [pageNumber, setPageNumber] = useState(1);
  const isError = useSelector((state) => state.resume.isError);
  const dispatch = useDispatch();
  const isLocal = process.env.LOCAL_ENVIRONMENT;
  const pdfPath = isLocal ?
    '../../../Joshua_Waalkes_Resume.pdf' :
    'https://waalkesjoshua.github.io/MyPortfolio/Joshua_Waalkes_Resume.pdf';

  console.log('isLocal', isLocal);
  console.log('LOCAL_ENV', process.env.LOCAL_ENVIRONMENT);
  let today = new Date();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    > {isError &&
        <h6>Error Loading Resume</h6>}
        <p>{`Test from ${today}`}</p>
      <Document
        file={pdfPath}
        onLoadError={() => {
          dispatch(setError(true));
        }}
      >
        <Page
          pageNumber={pageNumber}
          width={600}
          height={600}
          renderTextLayer={false} // Disable text layer
          renderAnnotationLayer={false} //Disable annotations
        />
      </Document>
      {/* <embed
        style={{marginTop: "10px"}}
        src="../../../public/Joshua_Waalkes_Resume.pdf"
        width={600}
        height={800}
      /> */}
    </ div>
  );
}