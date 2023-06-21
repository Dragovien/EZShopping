import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            firstName: localStorage.getItem("firstName") ? JSON.parse(localStorage.getItem("firstName")) : '',
            lastName: localStorage.getItem("lastName") ? JSON.parse(localStorage.getItem("lastName")) : '',
            email: localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : ''
        },
        darkMode : false
    },
    reducers: {
        updateUser: {
            reducer: (state, action) => {
                state.currentUser = { ...action.payload }
            },
            prepare: (updatedUser) => {
                return {
                    payload: updatedUser
                }
            }
        }
    },
    // extraReducers: (builder) => {
    //     builder.addCase(asyncIncrement.fulfilled, (state, action) => {
    //         state.value = action.payload
    //         state.loading = false
    //     }),
    //     builder.addCase(asyncIncrement.pending, (state, action) => {
    //         state.loading = true
    //     })
    //   },
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer