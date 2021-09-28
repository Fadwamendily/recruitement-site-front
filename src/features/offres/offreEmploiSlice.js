import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateOffreEmploi, GetALl, GetByID } from './offreEmploiAPI';

const initialState = {
    createoffrestatus: '',
    offres: [],
    singleoffre: null
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

export const getoffrebyid = createAsyncThunk(
    'offre/byid',
    async (id) => {
        const response = await GetByID(id);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);


export const offreSlice = createSlice({
    name: 'offres',
    initialState,
    reducers: {
        getOffreById: (state, action) => {
            console.log(action);
            for (let item of state.offres) {
                if (item._id === action.payload.id)
                    state.singleoffre = item
            }
        }
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

            })
            .addCase(getoffrebyid.pending, (state) => {

            })
            .addCase(getoffrebyid.fulfilled, (state, action) => {

                console.log(action.payload);
                state.singleoffre = action.payload.data
            })
            .addCase(getoffrebyid.rejected, (state, action) => {

            });
    },
});

export const { getOffreById } = offreSlice.actions;


export const selectcreateoffrestatus = (state) => state.offres.createoffrestatus;
export const selectofres = (state) => state.offres.offres;
export const selectsingleoffre = (state) => state.offres.singleoffre;



export default offreSlice.reducer;