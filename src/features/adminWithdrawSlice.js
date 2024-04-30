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
        deleteWithdraw: (state, action) => {
            const id = action.payload;
            state.value.withdraw = state.value.withdraw.filter(news => news.id !== id);
            state.value.isLoading = false;
          },
        clearWithdraw : (state) => {
            state.value.withdraw = null;
            state.value.isLoading = false
        }
    }
})

export const { setWithdraw, clearWithdraw,deleteWithdraw } = adminWithdrawSlice.actions;
export default adminWithdrawSlice.reducer