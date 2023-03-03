import { configureStore } from "@reduxjs/toolkit";
import firstState from './slice/Slice'

const store = configureStore({
    reducer: {
        first : firstState,
    },
})

export default store;