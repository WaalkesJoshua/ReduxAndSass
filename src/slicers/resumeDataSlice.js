import { createSlice } from '@Reduxjs/toolkit';

export const resumeDataSlice = createSlice({
  name: 'resume',
  initialState: {
    pdfData: null,
    pdfDataURL: null,
    googleDriveURL: "https://drive.google.com/file/d/1L2mk6Cn66SxLX8tsyAOiidCgOlUATtRN/view?usp=sharing",
    isError: false
  },
  reducers: {
    setData: (state, { payload }) => {
      state.pdfData = payload;
    },
    setDataURL: (state, { payload }) => {
      state.pdfDataURL = payload;
    },
    setError: (state, { payload }) => {
      if(payload === true || payload === false) {
        state.isError = payload;
      }
    }
  }
})

export const { setData, setDataURL, setError } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;