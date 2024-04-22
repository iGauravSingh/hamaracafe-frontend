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
        addLatest: (state, action) => {
            state.value.latest.push(action.payload); // Add the new latest news to the state
            state.value.isLoading = false;
          },
        
          deleteLatest: (state, action) => {
            const id = action.payload;
            state.value.latest = state.value.latest.filter(news => news.id !== id);
            state.value.isLoading = false;
          },
      
        clearLatest : (state) => {
            state.value.latest = null;
            state.value.isLoading = false
        }
    }
})

export const { setLatest, addLatest ,clearLatest, deleteLatest } = adminLatestSlice.actions;
export default adminLatestSlice.reducer