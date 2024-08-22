export type TaskData = {
    id: string
    task: string
    completed: boolean
}

export type TaskProps = {
    task: TaskData
    onChange: (id: string, completed: boolean) => void
    onDelete: (id: string) => void
}

export type AddTaskFormProps = {
    task: string
    error: string
    onAddTask: () => void
    onChange: (task: string) => void
}