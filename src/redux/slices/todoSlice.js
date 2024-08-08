import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//Action
export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos')
    return responce.json()
})

const totoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },

    reducers: {
        emptyTodos: (state, action) => {
            state.data = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, actions) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodos.rejected, (state, actions) => {
            state.isLoading = false;
            state.isError = true;
            console.log("Error : ", actions.error)
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.data = action.payload;
        });
    }
})

export const { emptyTodos } = totoSlice.actions

export default totoSlice.reducer;