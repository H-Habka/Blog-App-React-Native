import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogArray: [{title : "hossien", content : "hello there this is my first react native app", id : "12312"}],
    loading: false,
    error: "",
};

const blogSlice = createSlice({
    name: "blogSlice",
    initialState,
    reducers: {
        deleteBlog : (state ,action) => {
            state.blogArray = state.blogArray.filter(item => item.id !== action.payload)
        },
        addBlog : (state, action) => {
            state.blogArray = [...state.blogArray , action.payload]
        }
    },
    extraReducers: {},
});

export const {deleteBlog,addBlog} = blogSlice.actions

export default blogSlice.reducer;
