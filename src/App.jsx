
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';


function App() {
const [users, setUsers] = useState([])

useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res=> res.json())
  .then(data=> {
     console.log(data)
     setUsers(data)
  })
},[])

const handleSubmit = event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const user = {name, email}
  console.log(user)

  fetch('http://localhost:5000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user),

  })
  .then(res => {
    res.json()
  })
  .catch(error =>{console.log(error)})
}

  return (
    <>
     <h1>{users.length}</h1>

   <form onSubmit={handleSubmit}>
   <input name='name' type="name" placeholder='Name'/>
    <input name='email' type="email" placeholder='Email'/>
    <input type="submit" value="Submit" />
   </form>
    </>
  )
}

export default App
