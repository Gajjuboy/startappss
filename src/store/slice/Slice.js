import { createSlice } from "@reduxjs/toolkit"; 

const firstState = createSlice({
    name: 'first',
    initialState: ["Store Created"],
    reducers: {
        updateState(state,action){},
    },
})

export default firstState.reducer;
export const { updateState } = firstState.actions;