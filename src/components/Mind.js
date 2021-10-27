import React,{useState} from 'react'

function Mind({task:{task,priority,completed,id}}) {
    const [EditRequest, setEditRequest] = useState(true)
    const [EditPriorityRequest, setEditPriorityRequest] = useState(true)
    const[NewPriority,setNewPriority] = useState(priority)
    const[NewTask, setNewTask]= useState(task) 
    
    function DeleteHandler(e){
        fetch(`http://localhost:4000/tasks/${id}`,{
            method:"DELETE",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                    })})}
    
    function editHandler(e){
    fetch(`http://localhost:4000/tasks/${id}`,{
    method:"PATCH",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
        task:NewTask
    })})
    .then(response => response.json())
    .then(json => console.log(json))
    setEditRequest(!EditRequest)
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
    }
    
    function completeHandler(e){
        fetch(`http://localhost:4000/tasks/${id}`,{
            method:"PATCH",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                completed:!completed
            })})
            .then(response => response.json())
            .then(json => console.log(json))
    }
    
        return (
            <div>
                {EditRequest? <p onClick={()=>setEditRequest(!EditRequest)} >task: {task}</p>:
               <> <input placeholder={task} onChange={(e)=>setNewTask(e.target.value)} value={NewTask}></input>
                <button onClick={editHandler}>Edit</button>
                </>
                }
      {EditPriorityRequest? <p onClick={()=>setEditPriorityRequest(!EditPriorityRequest)} >Priority: {priority}</p>:
               <> <input placeholder={priority} onChange={(e)=>setNewPriority(e.target.value)} value={NewPriority}></input>
                <button onClick={priorityEditHandler}>Edit</button>
                </>
                }
    <input type="checkbox" onClick={completeHandler} defaultChecked={completed} ></input>
                <button   onClick={()=>DeleteHandler(id)}        >Delete</button>
    
            </div>
        )
    }
export default Mind
