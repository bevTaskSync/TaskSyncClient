import React, { useState } from "react"

type TaskCardProps = {
    taskName: string,
    taskLabel: Array<string>,
    taskDescription: string,
    taskId: number,
    assignees: Array<number>
}

const TaskCard: React.FC<TaskCardProps> = ({taskName, taskLabel, taskDescription, taskId, assignees}) =>{
    return (
        <div className="task-card">
            <h3>{taskName}</h3>
            <ul>
                {taskLabel.map((label, index) => (<li key={index}>{label}</li>))}
            </ul>
            <p>{taskDescription}</p>
            <div>ID: {taskId}</div>
            <div>Assignees: {assignees.join(', ')}</div>
        </div>
    )
}


export default TaskCard