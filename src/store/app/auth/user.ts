import { UserType } from '@/types/userType';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: {name: "", email: "", role: ""} as UserType
}

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer

export const {setUser}= userSlice.actions