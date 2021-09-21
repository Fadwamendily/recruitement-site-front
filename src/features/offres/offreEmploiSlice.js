import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateOffreEmploi } from './offreEmploiAPI';

const initialState = {
    createoffrestatus: ''
};

export const createOffre = createAsyncThunk(
    'offre/create',
    async(data) => {
        const response = await CreateOffreEmploi(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const offreSlice = createSlice({
    name: 'offres',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(createOffre.pending, (state) => {
                state.createoffrestatus = 'loading'
            })
            .addCase(createOffre.fulfilled, (state, action) => {

                console.log(action.payload);


                if (action.payload.status === 200) {

                    state.createoffrestatus = 'success'
                } else {
                    state.createoffrestatus = 'failure'

                }


            })
            .addCase(createOffre.rejected, (state, action) => {
                state.createoffrestatus = 'failure'
            });
    },
});

export const {} = offreSlice.actions;


export const selectcreateoffrestatus = (state) => state.offres.createoffrestatus;


export default offreSlice.reducer;