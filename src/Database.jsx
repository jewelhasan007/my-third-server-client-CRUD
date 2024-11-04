import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Database = () => {
    const users = useLoaderData()
    console.log(users)
    const [updateUsers, setUpdateUsers] = useState(users)

const handleDelete = _id =>{
    console.log('delete hit from client for:', _id)
    fetch(`http://localhost:3000/users/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data=> {
        console.log(data);
        if(data.deletedCount>0){
            alert('Deleted Successfully')
            const remaining = users.filter(user => user._id !== _id);
            setUpdateUsers(remaining);
        }
    })
   
    
}

    return (
        <div>
            <h3 className="text-red-600">The database users are:{updateUsers.length}</h3>
            
            {
                updateUsers.map(user => <p ><span className="font-bold">User Id: </span>{user._id} 
                : <span className="font-bold ">User Name: </span>{user.name} 
                : <span className="font-bold">User Email: </span>{user.email}
                <button className="btn btn-error" type="button" onClick={()=>handleDelete(user._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default Database;