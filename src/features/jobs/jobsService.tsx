import { createSlice } from '@reduxjs/toolkit'

export const jobsService = createSlice({
    name: 'jobsservice',
    initialState: {
        value: []
    },
    reducers: {
        addInitialValue: (state: any, action) => {
            state.value = action.payload;

        },
        add: (state: any, action) => {
            state.value.push(action.payload);
        }
    }
})

export const { add, addInitialValue } = jobsService.actions;

export default jobsService.reducer