import { configureStore } from '@reduxjs/toolkit'
import jobsReducer from '../features/jobs/jobsService';

export default configureStore({
    reducer: {
        jobs: jobsReducer
    }
})