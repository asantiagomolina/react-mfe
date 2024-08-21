import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { UserData } from "../../types/UserManager";
import { UserManagerState } from "./userManagerSlice";

const addUser: CaseReducer<UserManagerState, PayloadAction<UserData>> = (state, action) => {
    const { id, name, username, email } = action.payload
    state = [
        ...state,
        {
            id: id,
            name: name,
            username: username,
            email: email
        }
    ]
}

const removeUser: CaseReducer<UserManagerState, PayloadAction<number>> = (state, action) => {
    const id = action.payload

    state = state.filter(user => user.id === id)
}

export default {
    addUser,
    removeUser
}