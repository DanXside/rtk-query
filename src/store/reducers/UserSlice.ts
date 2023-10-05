import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "./ActionCreators";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
};

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

export default userSlice.reducer;