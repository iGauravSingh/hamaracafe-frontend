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
        deleteHelp: (state, action) => {
            const id = action.payload;
            state.value.help = state.value.help.filter(news => news.id !== id);
            state.value.isLoading = false;
          },
        clearHelp : (state) => {
            state.value.help = null;
            state.value.isLoading = false
        }
    }
})

export const { setHelp, deleteHelp ,clearHelp } = adminHelpSlice.actions;
export default adminHelpSlice.reducer