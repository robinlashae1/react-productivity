import React from 'react'

function Priority({task:{task,priority,completed}}) {
    console.log("hello",task)
    return (
        <div>
            <p>task: {task} priority: {priority} comepleted?{completed} </p>
        </div>
    )
}
export default Body