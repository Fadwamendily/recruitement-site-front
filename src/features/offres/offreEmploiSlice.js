import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateOffreEmploi, GetALl } from './offreEmploiAPI';

const initialState = {
    createoffrestatus: '',
    offres: []
};

export const createOffre = createAsyncThunk(
    'offre/create',
    async (data) => {
        const response = await CreateOffreEmploi(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const getaaloffres = createAsyncThunk(
    'offre/getall',
    async () => {
        const response = await GetALl();
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
            })

            .addCase(getaaloffres.pending, (state) => {

            })
            .addCase(getaaloffres.fulfilled, (state, action) => {

                console.log(action.payload);
                state.offres = action.payload.data
            })
            .addCase(getaaloffres.rejected, (state, action) => {

            });
    },
});

export const { } = offreSlice.actions;


export const selectcreateoffrestatus = (state) => state.offres.createoffrestatus;
export const selectofres = (state) => state.offres.offres;


export default offreSlice.reducer;