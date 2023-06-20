import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../slices/counterSlice'

export default configureStore({
  reducer: {
    shop : shopReducer    
  },
})