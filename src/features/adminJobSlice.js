import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: {
        job: null,
        isLoading: true
    }
}

export const adminJobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setJob: (state,action) => {
            state.value.job = action.payload;
            state.value.isLoading = false
        },
        deleteJob: (state, action) => {
            const id = action.payload;
            state.value.job = state.value.job.filter(jo => jo.id !== id);
            state.value.isLoading = false;
          },
        //   this is fot final 
        editJob: (state, action) => {
            const editedJob = action.payload;
            const index = state.value.job.findIndex(jo => jo.id === editedJob.id);

            if(index !== -1){
                state.value.job[index] = editedJob;
            }
            state.value.isLoading = false;
        },
        clearJob : (state) => {
            state.value.job = null;
            state.value.isLoading = false
        }
    }
})

export const { setJob, clearJob, deleteJob,editJob } = adminJobSlice.actions;
export default adminJobSlice.reducer