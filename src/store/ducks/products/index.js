import { createAction,createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];
 
export const addProducts = createAction('ADD_PRODUCTS');
   

export default createReducer(INITIAL_STATE, {
    [addProducts.type]: (state,action) => [...action.payload] 
});

