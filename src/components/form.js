import React from 'react'

function Form ({formHanlder}) {
    return (
        <form  onSubmit={formHanlder} id="formDisplay">
            <label>Category</label>
            <select >
                <option category="Mind">Mind</option>
                <option category="Body">Body</option>
                <option category="Spirit">Spirit</option>
            </select> 
            <label> Priority</label>
            <select>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <label>Task:</label>
            <input type = "text" placeholder= "task" name ="task"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;