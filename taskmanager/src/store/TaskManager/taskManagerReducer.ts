import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { TaskData } from "../../types/TaskManager";
import { TaskManagerState } from "./taskManagerSlice";

const addTask: CaseReducer<TaskManagerState, PayloadAction<TaskData>> = (state, action) => {
    const { id, task, completed } = action.payload
    state.push({
        id: id,
        task: task,
        completed: completed,
    })
}

const deleteTask: CaseReducer<TaskManagerState, PayloadAction<string>> = (state, action) => {
    const id = action.payload
    return state.filter(task => task.id !== id)
}

const completeTask: CaseReducer<TaskManagerState, PayloadAction<TaskData>> = (state, action) => {
    const { id, completed } = action.payload

    state = state.map(task => {
        if (task.id === id) {
            task.completed = completed
        }
        return task
    })
}

export default {
    addTask,
    deleteTask,
    completeTask
}