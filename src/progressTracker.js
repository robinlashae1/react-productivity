import React from "react";
import { PieChart, Pie} from 'recharts';

function ProgressTracker(){
    const TotalMet = goalTotal - goalsLeft;
    const goalsLeft= goalTotal - TotalMet;
    
    const data ={
    backgroundColor: [
        'orange',
        'blue',
        'red',
        'purple',
        'green'
        ]}
    return(
        <>
        <H1>My Progress</H1>
        <p>Total goals met:{TotalMet}</p>
        <p>Goals left: {goalsLeft}</p>
        <p>Goal Total:{goalTotal}</p>
        <PieChart width={700} height={700}>
          <Pie data={data} dataKey={prop.id} outerRadius={250} fill="green" />
        </PieChart>
        </>
    )
}
export default ProgressTracker;