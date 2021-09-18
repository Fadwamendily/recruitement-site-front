import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Login } from './userAPI';

const initialState = {
    loginstatus: {
        iserror: false,
        error: '',
        status: ''
    }

    ,
    isauth: false,
    autheduser: null
};

export const login = createAsyncThunk(
    'users/login',
    async (data) => {
        const response = await Login(data);
        // The value we return becomes the `fulfilled` action payload
        return response;
    }
);

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loginstatus.status = 'loading'
            })
            .addCase(login.fulfilled, (state, action) => {

                console.log(action.payload);


                if (action.payload.data) {

                    
                    state.loginstatus.status = 'success'
                    state.isauth = true
                    state.autheduser = action.payload.data.user
                } else {

                    state.loginstatus.iserror = true
                    state.loginstatus.error = action.payload.response.data.message
                    state.loginstatus.status = 'failure'

                }


            })
            .addCase(login.rejected, (state, action) => {
                state.loginstatus.status = 'failure'
            });
    },
});

export const { } = userSlice.actions;


export const selectloginstatus = (state) => state.users.loginstatus;
export const selectisauth = (state) => state.users.isauth;
export const selectautheduser = (state) => state.users.autheduser;


export default userSlice.reducer;