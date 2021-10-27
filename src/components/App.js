
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header"
import Myprogress from './MyProgress'
import Mind from './Mind'
import Spirit from "./Spirit"
import Body from './Body';
import Home from "./Home"
import { useEffect, useState } from 'react';




function App() {
const [fetchedTasks, setFetchedTask] = useState(null)  
// const [sortedTasks, setsortedTasks]= useState(fetchedTasks) 
const [sorted, setsorted] = useState(false) 
const {formOBJ,setFormOObj}=useState({
task: "",
category: "",
priority: "",
completed: "false",
id:""


})




useEffect(() => {
fetch("http://localhost:4000/tasks")
.then (r=> r.json())
.then (data =>setFetchedTask(data))

}, [])


function formHanlder(e){
  e.preventDefault()
/// forgot how this works :( 
  /// grabing the data from a form and assigning it to the form OBJ

}






if(!fetchedTasks) return <p>Loading</p>




function sortHandler(){
setsorted(!sorted)
let sorter

if (sorted === true ) { sorter = "id"}

if (sorted === false ) { sorter = "priority"}

let res = fetchedTasks.sort((a,b)=>{
  console.log(sorter)
if    (a[sorter]>b[sorter] ) return 1
if (b[sorter] >a[sorter]) return -1
if ( a[sorter]=b[sorter]) return 0 



}

)
setFetchedTask(res)
console.log(fetchedTasks)

}






  return (
    <div >
      <Header  formHanlder={formHanlder}
      sortHandler={sortHandler}
      sorted={sorted}
      />
      <Switch >
        <Route path ="/body">
        {fetchedTasks.filter(task=>task.category ==="body").map(task=> <Body key={task.id} task={task} />)}
        </Route>
        <Route path="/spirit" >
        {fetchedTasks.filter(task=>task.category ==="spirit").map(task=> <Spirit key={task.id} task={task} />)}
        </Route>
        <Route path ="/mind">
        {fetchedTasks.filter(task=>task.category ==="mind").map(task=> <Mind key={task.id} task={task} />)}
        </Route>
        <Route path="/myprogress">
          <Myprogress /> 
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path= "*" >
          <p>404!!!!</p>
        </Route>
      </Switch>

    </div>
  )
}

export default App;
