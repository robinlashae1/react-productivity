
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import MyProgress from './MyProgress'
import Mind from './Mind'
import Spirit from "./Spirit"
import Body from './Body';
import Home from "./Home"
import { useEffect, useState } from 'react';

import "./App.css"



function App() {
const [fetchedTasks, setFetchedTask] = useState(null)  // This is where we store the get requests
const [DOMUpdater, setDOMUpdater]  = useState(0)  /// just a tool to update the DOM
const [sorted,setsorted]=useState(true) //// Used to sort 

const [FormOBJ, setFormOBJ] = useState({              /// Variable where we store form Data
task: "",
category: "",
priority: "",
completed: "false",
id:""


})
console.log(FormOBJ)

/// grabs all the data from the JSON
useEffect(() => {
fetch("http://localhost:4000/tasks")
.then (r=> r.json())
.then (data =>setFetchedTask(data))

}, [DOMUpdater]) /// grabs new info whenever the DOMHandler function is run 

function formChangeHandler(e){
setFormOBJ(data=> data={...data,[e.target.name] :e.target.value})
}

function formHanlder(e){
  e.preventDefault()
  console.log(FormOBJ.category)
if (FormOBJ.category==="Mind" ||FormOBJ.category=== "Body"||FormOBJ.category==="Spirit"){

  fetch(`http://localhost:4000/tasks`,{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({
      task:FormOBJ.task,
      category:FormOBJ.category,
      priority:FormOBJ.priority,
      completed:false,
      id:FormOBJ.id
    })})
    .then(response => response.json())
    .then(json => console.log(json))
 
    DOMHandler()


}
else{alert("Please enter a valid category ")}


/// forgot how this works :( 
  /// grabing the data from a form and assigning it to the form OBJ

}

function sortHandler(){ /////// Sorts data based on priority or ID  --- a checkbox in the header allow the user to toggle 
  setsorted(!sorted)
let sortKey = "id"
if (sorted ===false) {sortKey= "id"}
if (sorted ===true){ sortKey= "priority"}

let result = fetchedTasks.sort((a,b) => {
if (a[sortKey]>b[sortKey]) {return -1}
else if (b[sortKey]>a[sortKey]) {return 1}
else if(a[sortKey]=b[sortKey]){ return 0} 
})
setFetchedTask(result) 
}


useEffect(() => { ///////////// Used to update the DOM 
  setFetchedTask(fetchedTasks)
}, [DOMUpdater])


if(!fetchedTasks) return <p>Loading</p> /////// Loading so the fetch doesn't screw things up 

function DOMHandler(){ //////////// Used to update the DOM 
  console.log("dom updater")
  setDOMUpdater(DOMUpdater+1)
}
  return (
    <div id="appContainer">
      <Header  className="HeaderContainer" ////// Header - this is where users submit new tasks and can sort by priority 
      sortHandler={sortHandler}
      sorted={sorted}
      FormOBJ={FormOBJ}
      formChangeHandler={formChangeHandler}
      formHanlder={formHanlder} />
     <span id="spannedTitle">
      <Switch >
        <Route path ="/body">  
        {/* Body is where I am doing most of my new code, I will copy over the data once completed */}
        {fetchedTasks.filter(task=>task.category ==="body").map(task=> <Body id="body" DOMHandler={DOMHandler} key={task.id} task={task} />)} 
        </Route>
        <Route path="/spirit" >
        {fetchedTasks.filter(task=>task.category ==="spirit").map(task=> <Spirit DOMHandler={DOMHandler} key={task.id} task={task} />)}
        </Route>
        <Route path ="/mind">
        {fetchedTasks.filter(task=>task.category ==="mind").map(task=> <Mind DOMHandler={DOMHandler} key={task.id} task={task} />)}
        </Route>
        <Route path="/myprogress">
        <MyProgress  fetchedTasks={fetchedTasks} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path= "*" >
          <p>404!!!!</p>
        </Route>
      </Switch>
      </span>

    </div>
  )
}

export default App;