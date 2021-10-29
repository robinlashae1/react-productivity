import React,{useState,useEffect} from 'react'
import {Pie} from 'react-chartjs-2';

function MyProgress({fetchedTasks})  {
 
const [CompletedCount, setCompletedCount] = useState(0)
const [NotCompletedCount, setNotCompletedCount] = useState(0)
let NotCompletednum  = 0
let CompletedNum = 0

useEffect(() => {
    fetchedTasks.filter(task=>{
        if (task.completed === true) CompletedNum= CompletedNum +1
        else  NotCompletednum =NotCompletednum+1
        setCompletedCount(CompletedNum)
        setNotCompletedCount(NotCompletednum)
        })
}, [fetchedTasks])

const data = {
    labels: [
        'Completed',
         'Not Completed'],
    datasets: [
      {
        label: 'My progress',
        data: [CompletedCount, NotCompletedCount],
        backgroundColor: [
          '#FAA005',
          '#FFCE30'
        ],
        hoverOffset: 4,
        options:{responsive: true, 
            maintainAspectRatio: false,
            padding:"0px",
            defaultFontSize:"14px"}

      }
    ]
  }
    return (
        <>
        <div>
          <p>Completed:{CompletedCount}</p>
          <p>Not Completed:{NotCompletedCount}</p>
        </div>
        <div>
        <Pie
          data={data}
          options={{
            title:{
              display:true,
              text:'Completed Task',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          />
          </div>
        </>
    )
}

export default MyProgress