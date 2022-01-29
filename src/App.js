import {useState,useEffect} from "react";
import './App.css';
import axios from "axios";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Edit  from "./pages/Edit"
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import Update from "./pages/Update";
import { useParams } from "react-router-dom";

function App() {


  return (
    <div className="App">

{/* 
    {
      users.map((user)=>{
        return(
          <div>
            <p>{user.name.common}</p>
            <p>{user.population}</p>
           <Link to= "/edit"><button>Edit</button></Link>
          <Link to="/delete"><button>delete</button></Link>
          </div>
        )
      })

    }
     */}



      <Switch>
      <Route exact path="/" component={Home} />
          <Route exact path="/edit/:id" component={Edit} />
        <Route exact path="/delete" component={Delete} />
        <Route exact path="/update/:name"  component={Update} />
      </Switch>


    
    
    </div>
  );
}

export default App;
