import { configureStore } from '@reduxjs/toolkit'
//@ts-expect-error Can't resolve 'usermanagement/UserManager'
import userManagerReducer, { UserManagerState } from 'usermanagement/userManagerSlice'

export type GlobalState = {
    userManager: UserManagerState
}

const store = configureStore({
    reducer: {
        userManager: userManagerReducer
    }
})

export default store