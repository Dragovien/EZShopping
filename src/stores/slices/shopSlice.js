import { createSlice } from '@reduxjs/toolkit'

const importProductList = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch('https://fakestoreapi.com/products')
            let productList = await response.json()
            console.log('called API')
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
        userCart: [],

    },
    reducers: {
        addProductToCart: {
            reducer: (state, action) => {
                state.userCart = [...state.userCart, ...action.payload]
                console.log(state.userCart)
            },
            prepare: (products) => {
                return {
                    payload : products
                }
            }
        },

        updateCart: {
            reducer: (state, action) => {
                state.userCart = [...action.payload]
            },
            prepare: (filteredCart) => {
                return {
                    payload: filteredCart
                }
            }
        },

        clearCart: {
            reducer: (state, action) => {
                state.userCart = []
            }
        }
    },
})

export const { addProductToCart, updateCart, clearCart } = shopSlice.actions
export default shopSlice.reducer