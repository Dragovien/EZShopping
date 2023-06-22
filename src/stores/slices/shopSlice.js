import { createSlice } from '@reduxjs/toolkit'

const importProductList = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            let productList = await response.json()

            resolve(productList);
        } catch (e) {
            reject(error);
        }
    })
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        productsList: await importProductList(),
        userCart: localStorage.getItem('userCart') ? JSON.parse(localStorage.getItem('userCart')) : [],

    },
    reducers: {
        addProductToCart: {
            reducer: (state, action) => {
                localStorage.setItem('userCart', JSON.stringify([...state.userCart, ...action.payload]))
                state.userCart = JSON.parse(localStorage.getItem('userCart'))
            },
            prepare: (products) => {
                return {
                    payload: products
                }
            }
        },
        updateCart: {
            reducer: (state, action) => {
                state.userCart = [...action.payload]
                localStorage.setItem('userCart', JSON.stringify([...action.payload]))
            },
            prepare: (filteredCart) => {
                return {
                    payload: filteredCart
                }
            }
        },

        clearCart: {
            reducer: (state, action) => {
                localStorage.removeItem('userCart')
                state.userCart = []
            }
        }
    },
})

export const { addProductToCart, updateCart, clearCart } = shopSlice.actions
export default shopSlice.reducer