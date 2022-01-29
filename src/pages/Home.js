import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/studentSlice"
import { getUsers } from "../redux/features/studentSlice";
import { getDelete } from "../redux/features/studentSlice"



function Home() {
  const dispatch = useDispatch();
  // const students = useSelector((state)=> state.student.students)
  // console.log(students);

  // const [users,setUsers] = useState([]);
  // const[localusers,setLocalUsers] = useState([])


  // const getData = async() => {
  //  const res = await axios.get(`https://restcountries.com/v3.1/all`);
  //  const data = res.data ;
  //  setUsers(data)
  //  localStorage.setItem("data",JSON.stringify(data))
  //  const localdata = localStorage.getItem("data")
  //  console.log(data)
  //  console.log( JSON.parse(localdata) )
  //  const parsed_localdata = JSON.parse(localdata)
  //  setLocalUsers(parsed_localdata)
  // }



  // const deleteData =  (id) =>{
  //   // const  res =  await axios.delete(`https://restcountries.com/v3.1/all/${id}`)

  //   const update_data = users.filter(item => item.id !== id)
  //   setUsers(update_data)
  //   console.log(users)



  // } 

  

  const { users, status } = useSelector((state) => state.student)
  const [localData , setLocalData] = useState(users)

  // useEffect(()=> {
  //   const local_data = localStorage.getItem('local')
  //   if(local_data){
  //     setLocalData(JSON.parse(local_data))
  //   }
  // },[])

  useEffect(() => {
    localStorage.setItem('local',JSON.stringify(users))
    const local_data = localStorage.getItem('local')
    if(local_data){
      setLocalData(JSON.parse(local_data))
    }
  },[users])

  useEffect(()=> {
    if(localData == "" || undefined || null){
      dispatch(getUsers())
    }
  },[dispatch])
  

  console.log(localData)
  console.log(status)




  return (
    <div className="App">
      <h1>This is App </h1>

      {
        localData.map((user, idx) => {

          return (
            <div key={idx}  >
              <p>{user.name.common}</p>
              <p>{user.population}</p>
              <Link to={`/edit/${user.name.common}`}><button>Edit</button></Link>
              <button onClick={() => dispatch(getDelete(user))}>Delete</button>
              <Link to={`/update/${user.ccn3}`}><button>Update</button></Link>
            </div>
          )
        })
      }
    </div>
  );
}

export default Home;