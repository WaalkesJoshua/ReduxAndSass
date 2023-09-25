import { createSlice } from '@Reduxjs/toolkit';

export const resumeDataSlice = createSlice({
  name: 'resume',
  initialState: {
    isError: false
  },
  reducers: {
    setError: (state, { payload }) => {
      if(payload === true || payload === false) {
        state.isError = payload;
      }
    }
  }
})

export const { setError } = resumeDataSlice.actions;
export default resumeDataSlice.reducer;