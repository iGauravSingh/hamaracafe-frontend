import { createSlice} from "@reduxjs/toolkit"




const initialState ={
    value: {
        franchise: null,
        isLoading: true
    }
}

export const franchiseSlice = createSlice({
    name: "franchise",
    initialState,
    reducers: {
        setFranchise: (state,action) => {
            state.value.franchise = action.payload;
            state.value.isLoading = false
        },
        clearFranchise: (state) => {
            state.value.franchise = null;
            state.value.isLoading = false
        }
    }
})

export const { setFranchise, clearFranchise } = franchiseSlice.actions;
export default franchiseSlice.reducer





