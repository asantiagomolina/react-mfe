import React from 'react';
import Task from '../components/TaskManager/Task';

import '../index.scss'
import useTaskManager from '../hooks/useTaskManager';
import AddTaskForm from '../components/TaskManager/AddTaskForm';

const TaskManager: React.FC = () => {
    const { addTask, deleteTask, completeTask, taskChange, taskError, tasks, newTask } = useTaskManager()

    const handleAddTask = () => {
        addTask()
    }

    const handleDelete = (id: string) => {
        deleteTask(id)
    }

    const handleCheck = (id: string, completed: boolean) => {
        completeTask(id, completed)
    }

    const showNoTasks = tasks.length <= 0

    return (
        <div className='flex flex-col h-dvh p-8 items-center bg-stone-800 text-white overflow-y-auto'>
            <h1 className='mb-4 font-extrabold text-5xl'>Task Manager</h1>
            <div className='container'>
                <h2 className='font-bold text-xl'>Tasks List</h2>
                <hr className='my-4' />
                <ul className='py-2 px-4'>
                    {
                        showNoTasks ?
                            <li className='font-bold my-4'>
                                No tasks created
                            </li>
                            :
                            tasks.map((task) => (
                                <li key={task.id} className='flex items-center text-lg my-4'>
                                    <Task task={task} onChange={handleCheck} onDelete={handleDelete} />
                                </li>
                            ))
                    }
                </ul>
                <hr className='my-4' />
                <div>
                    <AddTaskForm task={newTask} error={taskError} onAddTask={handleAddTask} onChange={taskChange} />
                </div>
            </div >
        </div >
    );
};

export default TaskManager;