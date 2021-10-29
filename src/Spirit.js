import React from 'react'

function Spirit({task:{task,priority,completed}}) {
    return (
        <div>
    <p>task: {task} priority: {priority} comepleted?{completed} </p>
        </div>
    )
}
export default Spirit