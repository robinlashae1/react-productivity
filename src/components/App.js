
import './App.css';
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header"
import Myprogress from './MyProgress'
import Mind from './Mind'
import Spirit from "./Spirit"
import Body from './Body';
import Home from "./Home"




function App() {
   const history = useHistory()
console.log(history.push)
  return (
    <div >
      <Header />
      <Switch >
        <Route path ="/body">
         <Body />
        </Route>
        <Route path="/spirit" >
          <Spirit />
        </Route>
        <Route path ="/mind">
          <Mind />
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
