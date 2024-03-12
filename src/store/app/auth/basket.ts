import { MovementType } from '@/types/movementType';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
    basket: [],
    basketCount: 0
}

export const basketSlice = createSlice({
    initialState,
    name: 'basket',
    reducers: {
        setBasket: (state, action: PayloadAction<any>) => {
            console.log(action.payload);
            state.basket = action.payload
        }
    }
})

export default basketSlice.reducer

export const {setBasket}= basketSlice.actions