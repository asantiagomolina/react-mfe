import { configureStore } from '@reduxjs/toolkit'
import taskManagerReducer, { TaskManagerState } from './TaskManager/taskManagerSlice'

export type GlobalState = {
    taskManager: TaskManagerState
}

const store = configureStore({
    reducer: {
        taskManager: taskManagerReducer
    }
})

export default store