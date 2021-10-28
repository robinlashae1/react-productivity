import React,{useState} from 'react'
import styled from 'styled-components'

function Body({DOMHandler,task:{task,priority,completed,id}}) {
const [EditRequest, setEditRequest] = useState(true)
const [EditPriorityRequest, setEditPriorityRequest] = useState(true)
const[NewPriority,setNewPriority] = useState(priority)
const[NewTask, setNewTask]= useState(task) 

function DeleteHandler(){
    fetch(`http://localhost:4000/tasks/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
                })})
                DOMHandler()}

function editHandler(e){           //////// May want to change name this handles edits to the Tasks 
fetch(`http://localhost:4000/tasks/${id}`,{
method:"PATCH",
headers:{"Content-type":"application/json"},
body:JSON.stringify({
    task:NewTask
})})
.then(response => response.json())
.then(json => console.log(json))
setEditRequest(!EditRequest)
DOMHandler()
}

function priorityEditHandler(e){
    fetch(`http://localhost:4000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            priority:NewPriority
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        setEditPriorityRequest(!EditPriorityRequest)
        DOMHandler()
}

function completeHandler(e){ //////////// this handles when a user hits the completed checkmark 
    fetch(`http://localhost:4000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            completed:!completed
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        DOMHandler()
}

    return (
        <Card  > 
        <nav className="card"  >
        {/* Turerary operator When the user clicks the task it changes to an input and then then sends the data to the edit handler where it can do its thing.  */}
        
           <div className="header"  >
            {EditRequest? <p onClick={()=>setEditRequest(!EditRequest)} >{task}   </p>:
           <> <input placeholder={task} onChange={(e)=>setNewTask(e.target.value)} value={NewTask}></input>
            <button onClick={editHandler}>Edit</button>
            </>
            }
            </div>

            <div className="container"  >
  {EditPriorityRequest? <p  className="container" onClick={()=>setEditPriorityRequest(!EditPriorityRequest)} >Priority: {priority}</p>:
           <> <input placeholder={priority} onChange={(e)=>setNewPriority(e.target.value)} value={NewPriority}></input>
            <button className="container"  onClick={priorityEditHandler}>Edit</button>
            </>
            } 
            <label>Completed: </label>
<input type="checkbox" onClick={completeHandler} defaultChecked={completed} ></input>
            <button   onClick={()=>DeleteHandler(id)}        >Delete</button> 

     </div>

        </nav>
        </Card>
    )
}
export default Body




const Card = styled.div `

`