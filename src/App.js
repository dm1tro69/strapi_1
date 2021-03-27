import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Create from "./pages/Create";
import Nav from "./components/Nav";
import SinglePost from "./pages/SinglePost";


function App() {
 return (
     <div className={'App'}>
         <h2>App</h2>
         <Router>
             <Nav/>

             <Switch>
                 <Route exact path="/" component={Home}/>
                 <Route path="/create" component={Create}/>
                 <Route exact path="/:id" component={SinglePost}/>
             </Switch>
         </Router>
     </div>

 )

}

export default App;
