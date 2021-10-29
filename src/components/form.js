import React from 'react'

function Form ({formChangeHandler,formHanlder}) {
    return (
        <form  onSubmit={formHanlder} id="formDisplay">
            <label>Category</label>
            <select name="category" onChange={formChangeHandler} >
                <option name="category" value="mind">Mind</option>
                <option name="category" value="body">Body</option>
                <option name="category" value="spirit">Spirit</option>
            </select> 
            <label> Priority</label>
            <select name="priority" onChange={formChangeHandler} >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <label>Task:</label>
            <input onChange={formChangeHandler} type = "text" placeholder= "task" name ="task"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
