import React,{useState,useEffect} from 'react'

function MyProgress({fetchedTasks})  {
 
const [CompletedCount, setCompletedCount] = useState(0)
const [NotCompletedCount, setNotCompletedCount] = useState(0)
let NotCompletednum  =0
let CompletedNum =0 

useEffect(() => {
    fetchedTasks.filter(task=>{
        if (task.completed === true) CompletedNum= CompletedNum +1
        else  NotCompletednum =NotCompletednum+1
        setCompletedCount(CompletedNum)
        setNotCompletedCount(NotCompletednum)
        })
}, [fetchedTasks])

    return (
        <div>
          <p>Completed:{CompletedCount}</p>
          <p>Not Completed:{NotCompletedCount}</p>
        </div>
    )
}

export default MyProgress