import { createSlice, Slice } from "@reduxjs/toolkit";
import { TaskData } from "../../types/TaskManager";
import taskManagerReducers from "./taskManagerReducer";

export type TaskManagerState = Array<TaskData>

const initialState: TaskManagerState = []

export const taskManagerSlice: Slice<TaskManagerState> = createSlice({
    name: "taskManagerSlice",
    initialState: initialState,
    reducers: taskManagerReducers,
})

export const { addTask, deleteTask, completeTask } = taskManagerSlice.actions

export default taskManagerSlice.reducer
