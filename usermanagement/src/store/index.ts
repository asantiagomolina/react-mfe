import { configureStore } from '@reduxjs/toolkit'
import userManagerReducer, { UserManagerState } from './UserManager/userManagerSlice'

export type GlobalState = {
    userManager: UserManagerState
}

const store = configureStore({
    reducer: {
        userManager: userManagerReducer
    }
})

export default store