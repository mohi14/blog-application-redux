import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    sort: "",
    isSaved: false
}


const filterSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        blogSorted: (state, action) => {
            state.sort = action.payload
        },
        blogFiltered: (state, action) => {
            state.isSaved = action.payload
        }
    }
})

export default filterSlice.reducer;
export const { blogSorted, blogFiltered } = filterSlice.actions;