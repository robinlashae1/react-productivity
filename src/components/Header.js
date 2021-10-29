import React,{useState} from 'react'
import Form from "./form"
import { NavLink } from "react-router-dom";
import styled  from "styled-components";

function Header({formChangeHandler,FormOBJ,formHanlder,sortHandler,sorted}) {
const [displayForm, setdisplayForm] = useState(false)


    return (
<HeaderContainer >
        <div className="HeaderContainer">
          <h1 id="HeaderTitle">
           Productivity Tracker
        </h1>  
        <button id='sortButton' onClick={()=>sortHandler()} >Sort by Priority</button>
        {/* <input type="checkbox" onChange={()=>sortHandler()} checked={sorted}  ></input> */}

        <nav className="navLink" style= {{padding: "50px"}}  >
      <NavLink style= {{padding:"5opx"}} to="/" exact>Home</NavLink>
      <NavLink style= {{padding: "50px"}} to="/body"exact>Body</NavLink>
      <NavLink style= {{padding: "50px"}} to="/mind">Mind</NavLink>
      <NavLink style= {{padding: "50px"}} to="/spirit">Spirit</NavLink>
      <NavLink style= {{padding: "50px"}} to="/MyProgress">My Progress</NavLink>
      </nav>
      <button type="button" onClick = {()=>setdisplayForm(!displayForm)} value="x">Add a Goal</button>
    
     {displayForm?<p></p> : <Form formChangeHandler={formChangeHandler} FormOBJ={FormOBJ} formHanlder={formHanlder}/>}
        </div>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div `
display:Inline;
button {
  display:Inline;
background-color: grey;
color:white;
padding: 10px 24px
}
h1{
  text-align:center;
}
`