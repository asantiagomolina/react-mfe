import React from "react";
import { TaskProps } from "../../types/TaskManager";
import cn from "classnames"

const Task: React.FC<TaskProps> = ({ task, onChange, onDelete }) => {

    return (
        <>
            <button className='font-extrabold text-gray-300 hover:text-gray-100 text-sm mr-4 border rounded-full w-6 h-6' onClick={() => onDelete(task.id)}>X</button>
            <input
                id="checkbox-default"
                className='w-5 h-5 border cursor-pointer border-gray-300 rounded-md mr-2'
                type="checkbox"
                name="tasks"
                checked={task.completed}
                onChange={() => onChange(task.id, task.completed)}
            />
            <label htmlFor="checkbox-default" className={cn('cursor-pointer', { 'line-through': task.completed })}>{task.task}</label>
        </>
    )
}

export default Task