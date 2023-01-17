import { configureStore } from '@reduxjs/toolkit';
import FilmsReducer from './films-reducer'
const store = configureStore({
  reducer: {
    data:FilmsReducer
  },
});
export default store;
