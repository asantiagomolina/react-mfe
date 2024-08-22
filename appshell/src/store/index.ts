import { configureStore } from '@reduxjs/toolkit'
//@ts-expect-error Can't resolve 'usermanagement/UserManager'
import userManagerReducer, { UserManagerState } from 'usermanagement/userManagerSlice'
//@ts-expect-error Can't resolve 'usermanagement/UserManager'
import taskManagerReducer, { TaskManagerState } from 'taskmanager/taskManagerSlice'

export type GlobalState = {
    userManager: UserManagerState,
    taskManager: TaskManagerState
}

const store = configureStore({
    reducer: {
        userManager: userManagerReducer,
        taskManager: taskManagerReducer
    }
})

export default store