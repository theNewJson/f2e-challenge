import React, { useState } from 'react'
import { reduce, map } from 'ramda'
import TaskList from './TaskList'

export enum TaskStatus {
    Pending = 'pending',
    Working = 'working',
    Completed = 'completed'
}

export interface Task {
    index: number
    name: string
    status: TaskStatus
}

const Task = () => {
    const [tasks, setTasks] = useState<Task[]>([] as Task[])

    const handleTaskCreate = () => {
        const newTask = {
            index: tasks.length + 1,
            name: `Task ${tasks.length + 1}`,
            status: TaskStatus.Pending
        }
        setTasks(prevState => [...prevState, newTask])
    }

    const handleTaskRemove = () => {
        setTasks(prevState => prevState.slice(0, prevState.length - 1))
    }

    const removeTask = (index: number) => {
        setTasks(prevState => reduce<Task, Task[]>((tasks, task) => task.index === index ? tasks : [ ...tasks, task], [], prevState))
    }

    const updateTask = (updatedTask: Task) => {
        console.log(updatedTask)
        console.log(updatedTask.index)
        setTasks(prevState => {
            console.log(prevState)
            return map((task) => {
                console.log(task)
                return task.index === updatedTask.index ? updatedTask : task
            }, prevState)
        })
    }

    return (
        <div style={{ margin: '20px auto', width: '400px' }}>
            <button onClick={handleTaskCreate}>+</button>
            <button onClick={handleTaskRemove}>-</button>
            <TaskList tasks={tasks} removeTask={removeTask} updateTask={updateTask}/>
        </div>
    )
}

export default Task