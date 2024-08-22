import React from "react";
import { TaskProps } from "../../types/TaskManager";
import cn from "classnames"

const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {

    return (
        <>
            <button className='font-extrabold text-gray-300 hover:text-gray-100 text-xl sm:text-sm mr-4 border rounded-full w-8 h-8 sm:w-6 sm:h-6 min-w-8 sm:min-w-6' onClick={() => onDelete(task.id)}>X</button>
            <input
                id="checkbox-default"
                className='w-5 h-5 border cursor-pointer border-gray-300 rounded-md mr-2 min-w-8'
                type="checkbox"
                name="tasks"
                checked={task.completed}
                onChange={() => onChange(task.id, task.completed)}
            />
            <label htmlFor="checkbox-default" className={cn('cursor-pointer break-words break-all', { 'line-through': task.completed })}>{task.task}</label>
        </>
    )
}

export default Task