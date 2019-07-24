import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './index'

interface Props {
    tasks: Task[]
    removeTask: Function
    updateTask: Function
}

const Placeholder = () => <div>Press + button to create a new task!</div>

const TaskList = (props: Props) => {
    const { tasks, removeTask, updateTask } = props
    return tasks.length === 0 ? <Placeholder /> : (
    <div>
        {tasks.map((task, index) => <TaskItem key={index} task={task} onRemove={removeTask} updateTask={updateTask}/> )}
    </div>)

}

export default TaskList
