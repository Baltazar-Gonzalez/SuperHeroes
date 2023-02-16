import React from "react"
import {Route, Redirect, Switch} from "react-router-dom"
import {Navbar} from "../Navbar"
import {Footer} from "../Footer"
import {Home} from "../Home"
import {Login} from "../Login"
import {Register} from "../Register"
import {Superheros} from "../Superheros"
import {Hero} from "../Hero"
import {GlobalStyle} from "../../styles/GlobalStyles"

function App() {
  return (
    <>
  <GlobalStyle/>
    <Navbar/>
      <Switch>
        <Route path="/home" component={Home}/>  
        <Route path="/login" component={Login}/>  
        <Route path="/register" component={Register}/>  
        <Route path="/search/:searchId" component={Superheros}/>  
        <Route path="/character/:characterId" component={Hero}/>  
        <Redirect from="/" to="/home"/>
      </Switch>
    <Footer/>
  </>);
}

export default App;
