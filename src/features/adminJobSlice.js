import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        job: null,
        isLoading: true
    }
}

export const adminJobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJob: (state,action) => {
            state.value.job = action.payload;
            state.value.isLoading = false
        },
        clearJob : (state) => {
            state.value.job = null;
            state.value.isLoading = false
        }
    }
})

export const { setJob, clearJob } = adminJobSlice.actions;
export default adminJobSlice.reducer