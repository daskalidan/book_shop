import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { add_book, delete_book, get_all_books } from './main_shopAPI';
import { toast } from "react-toastify";


// State - data (init)
const initialState = {
    books: [],
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartItemsCount: 0,
    cartTotalPrice: 0
};
// async (1)
// simple async method (component can call it...)
export const dogetbooksAsync = createAsyncThunk(
    'main_shop/getbooks',
    async () => {
        const response = await get_all_books();
        return response.data;
    }
);

export const doaddbookAsync = createAsyncThunk(
    'main_shop/addbook',
    async (action) => {
        const response = await add_book(action);
        return response.data;
    }
);

export const dodeletebookAsync = createAsyncThunk(
    'main_shop/deletebook',
    async (action) => {
        const response = await delete_book(action);
        return response.data;
    }
);

export const main_shopSlice = createSlice({
    name: 'main_shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)

            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
                toast.info(`1 more ${state.cart[itemIndex].name} added to cart`, {
                    position: 'bottom-left'
                })
            } else {
                state.cart.push({ ...action.payload, quantity: 1 })
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id)

            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity -= 1;
                toast.info(`1 less ${state.cart[itemIndex].name} in cart`, {
                    position: 'bottom-left'
                })
            } else {
                state.cart = state.cart.filter(item => item.id !== action.payload.id)
                toast.error(`${action.payload.name} removed from cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        cartCalc: (state) => {
            let totalsCalc = state.cart.reduce(
                (total, item) => {
                    total.totalitems += item.quantity
                    total.totalprice += item.price * item.quantity
                    return total
                },
                {
                    totalitems: 0,
                    totalprice: 0
                }
            )
            state.cartItemsCount = totalsCalc.totalitems
            state.cartTotalPrice = totalsCalc.totalprice
        }

    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(dogetbooksAsync.fulfilled, (state, action) => {
                console.log(action.payload)
                if (action.payload) {
                    state.books = action.payload
                }
            })
            .addCase(doaddbookAsync.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload) {
                    state.books = action.payload
                }
            })

            .addCase(dodeletebookAsync.fulfilled, (state, action) => {
                console.log(action)
                if (action.payload) {
                    state.books = action.payload
                }
            })
    },
});

// export sync method
export const { addToCart, removeFromCart, cartCalc } = main_shopSlice.actions;

// export any part of the state
export const booksSelector = (state) => state.main_shop.books;
export const cartSelector = (state) => state.main_shop.cart;
export const cartItemsCountSelector = (state) => state.main_shop.cartItemsCount;
export const cartTotalPriceSelector = (state) => state.main_shop.cartTotalPrice;
// export the reducer to the applicaion
export default main_shopSlice.reducer;
