import axios from "axios"
import User from "./User"
import { useState } from "react"

function Home(){
    var [users,setUsers] = useState([])
    function getUsers(){
        axios({
            method:"get",
            url:"http://localhost:5000/allusers"
        }).then((response)=>{
            setUsers(response.data.data)
        })
    }
    return (
        <div>
           <h1 onClick={getUsers}>GetUsers</h1>
           <div className="row">
           {
            users.map((each)=>{
                return <User data={each} />
            })
           }
           </div>
           
        </div>
    )
}

export default Home