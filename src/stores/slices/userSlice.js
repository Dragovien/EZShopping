import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {
            firstName: localStorage.getItem("firstName") ? JSON.parse(localStorage.getItem("firstName")) : '',
            lastName: localStorage.getItem("lastName") ? JSON.parse(localStorage.getItem("lastName")) : '',
            email: localStorage.getItem("email") ? JSON.parse(localStorage.getItem("email")) : ''
        },
        darkMode: localStorage.getItem('darkMode') ? JSON.parse(localStorage.getItem("darkMode")) : false,
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
        },
        toggleDarkMode: {
            reducer: (state) => {
                document.body.classList.toggle('dark-mode')
                state.darkMode = !state.darkMode
                localStorage.setItem('darkMode', state.darkMode)
            }
        }
    },
})

export const { updateUser, toggleDarkMode } = userSlice.actions
export default userSlice.reducer