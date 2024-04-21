import { createSlice } from "@reduxjs/toolkit";

// This slice is for admin auth 

const initialState = {
    value: {
        admin: null,
        isLoading: true
    }
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmin: (state,action) => {
            state.value.admin = action.payload;
            state.value.isLoading = false
        },
        clearAdmin: (state) => {
            state.value.admin = null;
            state.value.isLoading = false
        }
    }
})

export const { setAdmin , clearAdmin } = adminSlice.actions;
export default adminSlice.reducer








