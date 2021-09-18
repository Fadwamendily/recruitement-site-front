import { configureStore } from '@reduxjs/toolkit';
import entreprisesReducer from '../features/entreprises/entrepriseSlice';
import candidatsReducer from '../features/candidats/candidatSlice';
import usersReducer from '../features/users/userSlice';


export const store = configureStore({
  reducer: {
    entreprises: entreprisesReducer,
    candidats:candidatsReducer,
    users:usersReducer
  },
});