import React, { useState } from 'react';
import { Task } from './index';

interface Props {
    task: Task
    onRemove: any
    updateTask: any
}

const TaskItem = (props: Props) => {
    const { task, onRemove, updateTask } = props
    const [editable, setEditible] = useState(false)
    const [taskName, setTaskName] = useState(task.name)

    const toggleEditable = () => {
        setEditible(prevState => !prevState)
    }
    const handleRemove = () => onRemove(task.index)
    const handleUpdate = () => {
        updateTask({ ...task, taskName })
        toggleEditable()
    }

    return (
        <div style={{ width: '200px' }}>
            {editable ? 
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <input type='text' value={taskName} onChange={({ target }) => setTaskName(target.value)}/>
                <button onClick={handleUpdate}>V</button>
            </div> : 
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '100px' }} onClick={toggleEditable}>{taskName}</div>
                <button onClick={handleRemove}>-</button>
            </div>}
        </div>
    )
}

export default TaskItem