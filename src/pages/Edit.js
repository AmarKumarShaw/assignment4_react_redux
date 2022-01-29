import "./Edit.css";
import { useState,useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";

const Edit = () => {
    

    let {id} = useParams();
    const history = useHistory();
    const [user,setUser] = useState([])

    const[updatedData,setUpDatedData] = useState({
        common_name : "",
        official_name: "",
        population:"",
        area:""
    })

    const {common_name,official_name,population,area} = updatedData;




 const handleChange = (e) => {
    e.preventDefault();
    history.push("/");
}


    return (
        <div className="edit-section">
            <h1>This is Edit Section</h1>
            <form onSubmit={handleChange} className="ui form">
                <div className="field">
                    <label>Country Name</label>
                    <input type="text" name="first-name" placeholder="First Name" value={user.name} />
                </div>
                <div className="field">
                    <label>Population</label>
                    <input type="text" name="last-name" placeholder="Last Name" value={user.population} />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit;