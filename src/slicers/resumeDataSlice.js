import { createSlice } from '@Reduxjs/toolkit';

export const resumeDataSlice = createSlice({
  name: 'resume',
  initialState: {
    pdfFile: null
  },
  reducers: {
    setFile: (state, {payload}) => {
      state.pdfFile = payload;
    }
  }

})

export const { setFile } = resumeDataSlicer.actions;
export default resumeDataSlice.reducer;