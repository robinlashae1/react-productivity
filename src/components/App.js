
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from "./Header"
import Myprogress from './MyProgress'
import Mind from './Mind'
import Spirit from "./Spirit"
import Body from './Body';
import Home from "./Home"




function App() {
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
      </Switch>

    </div>
  )
}

export default App;
