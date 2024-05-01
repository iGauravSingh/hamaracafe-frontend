import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        franchiseUsers: null,
        isLoading: true
    }
}

export const adminFranchiseListSlice = createSlice({
    name: "franchiseUsers",
    initialState,
    reducers: {
        setFranchiseUsers: (state,action) => {
            state.value.franchiseUsers = action.payload;
            state.value.isLoading = false
        },
        clearFranchiseUsers : (state) => {
            state.value.franchiseUsers = null;
            state.value.isLoading = false
        },
        updateFranchiseUsers: (state, action) => {
            if (state.value.franchiseUsers) {
                const index = state.value.franchiseUsers.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.value.franchiseUsers[index] = action.payload;
                }
            }
        }
    }
})

export const { setFranchiseUsers, clearFranchiseUsers, updateFranchiseUsers } = adminFranchiseListSlice.actions;
export default adminFranchiseListSlice.reducer