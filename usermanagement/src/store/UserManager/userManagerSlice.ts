import { createAsyncThunk, createSlice, Slice } from "@reduxjs/toolkit";
import { UserData } from "../../types/UserManager";
import userManagerReducers from "./userManagerReducer";

export type UserManagerState = Array<UserData>

const initialState: UserManagerState = []

export const userManagerSlice: Slice<UserManagerState> = createSlice({
    name: "userManagerSlice",
    initialState: initialState,
    reducers: userManagerReducers,
    extraReducers: (builder) => {
        builder.addCase(fetchUserInitialState.fulfilled, (_state, action) => {
            return action.payload
        })
    },
})

export const fetchUserInitialState = createAsyncThunk<Array<UserData>>(
    'userManager/fetchUsers',
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        return (await response.json()) as Array<UserData>
    }
)

export const { addUser, removeUser } = userManagerSlice.actions

export default userManagerSlice.reducer
