import React from 'react'

function Form ({formHanlder, formChangeHandler}) {
    return (
        <form  onSubmit={formHanlder} id="formDisplay">
            <label>Category</label>
            <select onChange={formChangeHandler}>
                <option value="mind">Mind</option>
                <option value="body">Body</option>
                <option value="spirit">Spirit</option>
            </select> 
            <label> Priority</label>
            <select onChange={formChangeHandler} >
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