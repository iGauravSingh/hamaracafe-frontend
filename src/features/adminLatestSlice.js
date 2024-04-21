import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        latest: null,
        isLoading: true
    }
}

export const adminLatestSlice = createSlice({
    name: "latest",
    initialState,
    reducers: {
        setLatest: (state,action) => {
            state.value.latest = action.payload;
            state.value.isLoading = false
        },
        clearLatest : (state) => {
            state.value.latest = null;
            state.value.isLoading = false
        }
    }
})

export const { setLatest, clearLatest } = adminLatestSlice.actions;
export default adminLatestSlice.reducer