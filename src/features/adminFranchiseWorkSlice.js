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
          updateFranchiseWork: (state,action) => {
            const updateWork = action.payload
            console.log('from usefranchise work slice',updateWork)
            const indexWork = state.value.franchisework.findIndex((wok) => wok.id === updateWork.id)
            if(indexWork !== -1){
                state.value.franchisework[indexWork] = updateWork
            }
          },
      
        clearFranchisework : (state) => {
            state.value.franchisework = null;
            state.value.isLoading = false
        }
    }
})

export const { setFranchisework, addFranchisework ,clearFranchisework, deleteFranchisework,updateFranchiseWork } = adminFranchiseWorkSlice.actions;
export default adminFranchiseWorkSlice.reducer