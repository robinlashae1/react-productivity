import React,{useState} from 'react'
import Form from "./Form"
import { NavLink } from "react-router-dom";
import styled  from "styled-components";

function Header({formHanlder,sortHandler,sorted}) {
const [displayForm, setdisplayForm] = useState(false)

    return (
<HeaderContainer>
        <div>
          <header>
            Header goes here        
        </header>  
        <label>Sort based on Priority:</label>
        <input type="checkbox" onChange={()=>sortHandler()} checked={sorted}  ></input>


        <nav  style= {{padding: "50px"}}  >
        <NavLink style= {{padding: "50px"}} to="/">Home</NavLink>
      <NavLink style= {{padding: "50px"}} to="/body">body</NavLink>
      <NavLink  style= {{padding: "50px"}} to="/mind">Mind</NavLink>
      <NavLink style= {{padding: "50px"}} to="/spirit">Spirit</NavLink>
      </nav>
      <button type="button" onClick = {()=>setdisplayForm(!displayForm)} value="x">+</button>
    
     {displayForm?<p></p> : <Form formHanlder={formHanlder}/>}
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

`
