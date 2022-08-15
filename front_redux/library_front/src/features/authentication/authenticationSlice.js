import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { signin,signup } from './authenticationAPI';
import jwt_decode from "jwt-decode";

// State - data (init)
const initialState = {
    userName: "guest",
    email: "",
    token: "",
    logged: false
};
// async (1)
// simple async method (component can call it...)
export const doSigninAsync = createAsyncThunk(
    'authentication/signin',
    async (action) => {
        const response = await signin(action);
        return response.data;
    }
);

export const doSignupAsync = createAsyncThunk(
    'authentication/signup',
    async (action) => {
        const response = await signup(action);
        return response.data;
    }
);

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = ""
                    state.logged = false;
                    state.userName= "guest"
                    state.email=""
          },
    },
    //  async  (3)
    //   happens when async done - callback
    extraReducers: (builder) => {
        builder
            .addCase(doSigninAsync.fulfilled, (state, action) => {
                console.log(jwt_decode(action.payload.access))
                if (action.payload.access) {
                    state.token = action.payload.access
                    state.logged = true;
                    state.userName= jwt_decode(action.payload.access).username
                    state.email=jwt_decode(action.payload.access).email
                    // console.log( state.email)
                }
            })
            .addCase(doSignupAsync.fulfilled, (action) => {
                console.log(action)
                
            });
    },
});

// export sync method
export const { logout } = authenticationSlice.actions;

// export any part of the state
export const authenticationSelector = (state) => state.authentication;
export const selectLogged = (state) => state.authentication.logged;
export const selectEmail = (state) => state.authentication.email;
export const selectUserName = (state) => state.authentication.userName;
export const selectToken = (state) => state.authentication.token;
// export the reducer to the applicaion
export default authenticationSlice.reducer;
