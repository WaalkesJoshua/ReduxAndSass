import { configureStore } from '@Reduxjs/toolkit';
import resumeReducer from './slicers/resumeDataSlice';

export default configureStore({
  reducer: {
    resume: resumeReducer
  },
});