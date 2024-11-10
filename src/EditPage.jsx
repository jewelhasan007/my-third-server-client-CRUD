import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditPage = () => {
    const loadedUser = useLoaderData()
    console.log('loaded user is=', loadedUser)
    const handleEdit = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
   
        console.log(user)
        const updateUser = {name, email}

        fetch(`http://localhost:3000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <div>
            <h3 className='my-5 text-blue-600 underline font-bold font-serif'>{loadedUser?.name}'s Profile</h3>
        <form onSubmit={handleEdit}>
        <div>
        <input type="name" name="name" placeholder='email' className='input input-bordered' defaultValue={loadedUser?.name}  />
        </div>
        <div>
        <input type="email" name="email" placeholder='email' className='input input-bordered' defaultValue={loadedUser?.email}  />
        </div>
        <input type="submit" value="Edit" />

        </form>
     
        </div>
    );
};

export default EditPage;