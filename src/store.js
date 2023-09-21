import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slicers/resumeDataSlice';

export default configureStore({
  reducer: {
    resume: resumeReducer
  },
});