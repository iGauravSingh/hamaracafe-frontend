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
        }
    }
})

export const { setAffiliateUsers, clearAffiliateUsers } = adminAffiliateListSlice.actions;
export default adminAffiliateListSlice.reducer