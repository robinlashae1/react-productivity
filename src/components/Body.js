import React,{useState} from 'react'
import styled from 'styled-components'

function Body({DOMHandler,task:{task,priority,completed,id}}) {
const [EditRequest, setEditRequest] = useState(true)
const [EditPriorityRequest, setEditPriorityRequest] = useState(true)
const[NewPriority,setNewPriority] = useState(priority)
const[NewTask, setNewTask]= useState(task) 
const[Class, setClass]= useState(false)

function DeleteHandler(){
    fetch(`http://localhost:4000/tasks/${id}`,{
        method:"DELETE",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
                })})
               .then(DOMHandler())}

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
        .then(DOMHandler())
}

function completeHandler(e){ //////////// this handles when a user hits the completed checkmark 
    setClass((Class) => !Class);
    fetch(`http://localhost:4000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            completed:!completed
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        .then(DOMHandler())}
        function classHandler(){
            setClass((Class) => !Class)
        }
return (
    <>
    <nav className="card"  >
    {/* Turerary operator When the user clicks the task it changes to an input and then then sends the data to the edit handler where it can do its thing.  */}
    
       <div className="header"  >
        {EditRequest? <p onClick={()=>setEditRequest(!EditRequest)} className="taskText">{task}   </p>:
       <> <input placeholder={task} onChange={(e)=>setNewTask(e.target.value)} value={NewTask}></input>
        <button onClick={editHandler}>Edit</button>
        </>
        }
        </div>

        <div className="container"  >
            <button className="completedButton" onClick={completeHandler} defaultChecked={completed} >{Class? "Not Completed":"Completed"}</button>
        <button className="Deletebutton" onClick={()=>DeleteHandler(id)}>Delete</button>
{EditPriorityRequest? <p className="priorityText" onClick={()=>setEditPriorityRequest(!EditPriorityRequest)} >Priority: {priority}</p>:
       <> <input placeholder={priority} onChange={(e)=>setNewPriority(e.target.value)} value={NewPriority}></input>
        <button className="container"  onClick={priorityEditHandler}>Edit</button>
        </>} 
 </div>

    </nav>
    </>
)
}
export default Body
