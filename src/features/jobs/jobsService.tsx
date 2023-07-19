import { createSlice } from '@reduxjs/toolkit'

export const jobsService = createSlice({
    name: 'jobsservice',
    initialState: {
        value: []
    },
    reducers: {
        add: (state: any, action) => {
            state.value.push(action.payload);
        },
        remove: (state: any, action) => {
            let index = state.value.findIndex((i: any) => i.id == action.payload);
            if (index > -1) {
                state.value.splice(index, 1);
            }
        }
    }
})

export const { add, remove } = jobsService.actions;

export default jobsService.reducer