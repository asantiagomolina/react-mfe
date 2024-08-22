import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../store';
import { addTask, completeTask, deleteTask, TaskManagerState } from "../store/TaskManager/taskManagerSlice";


const useTaskManager = () => {
    const [task, setTask] = useState("")
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const tasks = useSelector<GlobalState, TaskManagerState>((state) => state.taskManager)

    const handleAddTask = () => {
        if (task.trim() === "") {
            setError('Task shouldn\'t be empty')
            return false
        }
        if (task.trim().length < 3) {
            setError('Task should be at least 3 characters long')
            return false
        }
        dispatch(addTask({
            id: crypto.randomUUID(),
            task: task,
            completed: false
        }))
        setError("")
        setTask("")
    }

    const handleDeleteTask = (id: string) => {
        dispatch(deleteTask(id))
    }

    const handleCompleteTask = (id: string, completed: boolean) => {
        dispatch(completeTask({
            id: id,
            completed: !completed
        }))
    }

    const handleTaskChange = (task: string) => {
        setTask(task);
        if (task === "") {
            setError("")
        }
    };

    return {
        addTask: handleAddTask,
        deleteTask: handleDeleteTask,
        completeTask: handleCompleteTask,
        taskChange: handleTaskChange,
        tasks,
        newTask: task,
        taskError: error
    }
}

export default useTaskManager