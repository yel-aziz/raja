
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../redux/loginslice'; // Adjust the import path
import matchReducer from '../redux/matcheSlice'

const store = configureStore({
  reducer: {
    login: loginReducer,
    match: matchReducer,
    // Add other reducers if any
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;