import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        help: null,
        isLoading: true
    }
}

export const adminHelpSlice = createSlice({
    name: "help",
    initialState,
    reducers: {
        setHelp: (state,action) => {
            state.value.help = action.payload;
            state.value.isLoading = false
        },
        clearHelp : (state) => {
            state.value.help = null;
            state.value.isLoading = false
        }
    }
})

export const { setHelp, clearHelp } = adminHelpSlice.actions;
export default adminHelpSlice.reducer