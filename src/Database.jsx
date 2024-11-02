import { useLoaderData } from "react-router-dom";

const Database = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h3 className="text-red-600">The database users are:{users.length}</h3>
            {
                users.map(user => <p ><span className="font-bold">User Id: </span>{user._id} 
                : <span className="font-bold ">User Name: </span>{user.name} 
                : <span className="font-bold">User Email: </span>{user.email}</p>)
            }
        </div>
    );
};

export default Database;