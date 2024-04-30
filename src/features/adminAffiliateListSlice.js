import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        affiliateUsers: null,
        isLoading: true
    }
}

export const adminAffiliateListSlice = createSlice({
    name: "affiliateUsers",
    initialState,
    reducers: {
        setAffiliateUsers: (state,action) => {
            state.value.affiliateUsers = action.payload;
            state.value.isLoading = false
        },
        clearAffiliateUsers : (state) => {
            state.value.affiliateUsers = null;
            state.value.isLoading = false
        },
        updateAffiliateUser: (state, action) => {
            if (state.value.affiliateUsers) {
                const index = state.value.affiliateUsers.findIndex(user => user.id === action.payload.id);
                if (index !== -1) {
                    state.value.affiliateUsers[index] = action.payload;
                }
            }
        }
    }
})

export const { setAffiliateUsers, clearAffiliateUsers, updateAffiliateUser } = adminAffiliateListSlice.actions;
export default adminAffiliateListSlice.reducer