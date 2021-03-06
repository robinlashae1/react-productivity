import { NavLink } from "react-router-dom";
import styled  from "styled-components";
import {useState} from "react";

const [displayForm, setdisplayForm] = useState(false)


function Header({formHanlder,sortHandler,sorted}) {
    return(
        <div className="HeaderContainer">
        <header/> 
        <label>Sort based on Priority:</label>
        <input type="checkbox" onChange={()=>sortHandler()} checked={sorted}  ></input>
        <nav  style= {{padding: "50px"}}  >
        <NavLink style= {{padding: "50px"}} to="/">Home</NavLink>
        <NavLink style= {{padding: "50px"}} to="/body">body</NavLink>
      </nav>
      <button type="button" onClick = {()=>setdisplayForm(!displayForm)} value="x">+</button>
      {displayForm? <Form formHanlder={formHanlder}/> : null}
        </div>
    )
}
export default Header;

