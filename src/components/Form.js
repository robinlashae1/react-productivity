import React from 'react'

function Form() {
    return (
        <div>
            <label>Category</label>
            <input type = "text" placeholder= "Category" name ="category"></input>
            <label> Priority</label>
            <input type ="number" placeholder ="Please enter a number from 1-10 (10 is the highest)" name="priority"></input>
            <label>Task:</label>
            <input type = "text" placeholder= "task" name ="task"></input>
       
       
       
       
       
       
       
        </div>
    )
}

export default Form
