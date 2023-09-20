import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slicers/resumeDataSlice';

export default store = configureStore({
  reducer: {
    resume: resumeReducer
  },
});