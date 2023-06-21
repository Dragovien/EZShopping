import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// const incrementValueWithDelay = (value) => {
//     return new Promise((resolve, reject) => {
//       try {
//         setTimeout(() => {
//           const incrementedValue = value + 1;
//           resolve(incrementedValue);
//         }, 1000); // 1-second delay
//       } catch (error) {
//         reject(error);
//       }
//     });
//   };

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
        userCart: []
    },
    reducers: {
        addProductToCart: {
            reducer: (state, action) => {
                console.log(action.payload)


                state.userCart = [...state.userCart, ...action.payload]
                
            },
            prepare: (products) => {
                return {
                    payload : products
                }
            }
        },

        clearCart: {
            reducer: (state, action) => {
                state.userCart = []
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

// export const asyncIncrement = createAsyncThunk(
//     'counter/asyncIncrement',
//     async (oldValue, ThunkAPI) => {
//         const response = await incrementValueWithDelay(oldValue)
//         return response
//     }
// )

export const { addProductToCart, clearCart } = shopSlice.actions
export default shopSlice.reducer