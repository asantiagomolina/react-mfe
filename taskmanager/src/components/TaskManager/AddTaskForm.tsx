import React from "react";
import { AddTaskFormProps } from "../../types/TaskManager";

const AddTaskForm: React.FC<AddTaskFormProps> = ({ task, onAddTask, onChange, error }) => {

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onAddTask()
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }

    return (
        <form className='flex flex-col-reverse sm:flex-row' onSubmit={handleFormSubmit}>
            <div className="mt-4 sm:mt-0">
                <button className='w-full sm:w-auto text-nowrap mr-5 bg-slate-500 hover:bg-slate-700 bg-opacity-50 px-3 py-2 rounded-md font-extrabold sm:font-bold text-xl sm:text-base' onClick={handleFormSubmit}>Add Task</button>
            </div>
            <div className='w-full'>
                <input
                    type="text"
                    className='h-10 text-xl sm:text-base bg-transparent border-b w-full outline-none focus:border-blue-400 tracking-wider'
                    placeholder='Write your task here...'
                    value={task}
                    onChange={handleChange}
                />
                {error && <span className='text-lg sm:text-sm justify-self-end text-red-400'>{error}</span>}
            </div>
        </form>
    )
}

export default AddTaskForm