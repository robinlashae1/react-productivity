import React from 'react'

function Form ({formChangeHandler,formHanlder,FormOBJ:{task,category,priority}}) {
    return (
        <form  onSubmit={formHanlder}>
            <label>Category</label>
            <input  onChange={formChangeHandler} type = "text" placeholder= "Category" name ="category"  value={category} ></input>
            <label> Priority</label>
            <input type ="number"  onChange={formChangeHandler}  placeholder ="Please enter a number from 1-10 (10 is the highest)" name="priority"value={priority} ></input>
            <label>Task:</label>
            <input type = "text"  onChange={formChangeHandler}  placeholder= "task" name ="task" value={task}></input>
            <button type="submit">x</button>    
       
       
       
       
       
       
        </form>
    )
}

export default Form
