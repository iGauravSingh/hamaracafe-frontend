import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        franchisework: null,
        isLoading: true
    }
}

export const adminFranchiseWorkSlice = createSlice({
    name: "franchisework",
    initialState,
    reducers: {
        setFranchisework: (state,action) => {
            state.value.franchisework = action.payload;
            state.value.isLoading = false
        },
        addFranchisework: (state, action) => {
            state.value.franchisework.push(action.payload); // Add the new franchisework news to the state
            state.value.isLoading = false;
          },
        
          deleteFranchisework: (state, action) => {
            const id = action.payload;
            state.value.franchisework = state.value.franchisework.filter(news => news.id !== id);
            state.value.isLoading = false;
          },
      
        clearFranchisework : (state) => {
            state.value.franchisework = null;
            state.value.isLoading = false
        }
    }
})

export const { setFranchisework, addFranchisework ,clearFranchisework, deleteFranchisework } = adminFranchiseWorkSlice.actions;
export default adminFranchiseWorkSlice.reducer