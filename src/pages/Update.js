import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { getUpdate } from '../redux/features/studentSlice';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";
import { useEffect } from 'react';


const update_data = JSON.parse(localStorage.getItem("local"))


const Update = () => {
  let history = useHistory();
  const [username,setUsername] = useState();
  const [population,setPopulation] = useState();

  let { name } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.student);
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(getUpdate({name,username,population}));
    history.push("/")
  }

  const update_refresh = () => {
    return update_data
  }

  console.log(JSON.parse(localStorage.getItem("local")))

  useEffect(()=>{
    update_refresh()
  })


  return (
    <div>

      {update_data.filter((item) => item.ccn3 == name).map((user)=>(
                <div>
                  {/* <h1>This is Update {user.name.common}</h1> */}
                    <form onSubmit={handleSubmit}>
                      <h1>Update {user.name.common}</h1>
                      <input type="text" placeholder="Enter your Username" value={username}  onChange={(e) => setUsername(e.target.value)}  />
                      <input type="text" placeholder="Enter your Population" value={population}  onChange={(e) => setPopulation(e.target.value) } />
                      <button>Update</button>
                    </form>
                </div>
        ))} 

    </div>
  );
};

export default Update;
