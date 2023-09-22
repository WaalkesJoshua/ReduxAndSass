import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setDataURL, setError } from '../../slicers/resumeDataSlice';

export default function Resume() {
  const dispatch = useDispatch();
  const pdfDataURL = useSelector((state) => state.resume.pdfDataURL);
  const isError = useSelector((state) => state.resume.isError);
  const googleDriveURL = useSelector((state) => state.resume.googleDriveURL);
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    fetch(corsProxyUrl + googleDriveURL)
      .then((response) => response.blob())
      .then((data) => {
        const dataURL = URL.createObjectURL(data);
        dispatch(setData(data));
        dispatch(setDataURL(dataURL));
      })
      .catch((e) => {
        console.error('Error fetching PDF file from: ' + googleDriveURL);
        dispatch(setError(true))
      });
  }, []);


  return (
    <div>
      <h3>Resume</h3>
      //Ultimately I want to use react-pdf
      {isError &&
        <p>Error loading resume pdf</p>}
      {(pdfDataURL && !isError) ? (
      <iframe
        className="resumeViewer"
        src={pdfDataURL}
        width="75%"
        height="1200px"
        title="Resume"
      />
      ) : (
        <p>Loading Resume ...</p>
      )}
      <button onClick={() => { alert("This button doesn't do anything yet!") }}> Download as a PDF </button>
    </div>
  )
}