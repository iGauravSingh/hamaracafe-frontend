import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        withdraw: null,
        isLoading: true
    }
}

export const adminWithdrawSlice = createSlice({
    name: "withdraw",
    initialState,
    reducers: {
        setWithdraw: (state,action) => {
            state.value.withdraw = action.payload;
            state.value.isLoading = false
        },
        clearWithdraw : (state) => {
            state.value.withdraw = null;
            state.value.isLoading = false
        }
    }
})

export const { setWithdraw, clearWithdraw } = adminWithdrawSlice.actions;
export default adminWithdrawSlice.reducer