import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/User";
import { getUsers } from "./api";

const ChangeUser = () => {

    const [users, setUsers] = useState([]);

   const {setLoggedInUser} = useContext(UserContext)

    useEffect(()=> {
        getUsers().then(({allUsers})=> {
            setUsers(allUsers)
        })
    }, [])

    
    
    return <section className="wide-screen">
        <ul className="users">{users.map((user)=>{
            return <button className="user-button" onClick={()=> setLoggedInUser(user)} key={user.username}>
                
                <h2>{user.username}</h2>
                <img id="user-img" src={user.avatar_url} alt={user.username}/>
                         
            </button>
        })}</ul>
    </section>
}

export default ChangeUser