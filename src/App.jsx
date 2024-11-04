
import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
const [users, setUsers] = useState([])

useEffect(()=>{
  fetch('http://localhost:3000/users')
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

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user),

  })
  form.reset()
  .then(res => {
    res.json()
  })
  .catch(error =>{console.log(error)})
 
}

  return (
    <>
    <div >
    <NavLink to="/">Home</NavLink>
    <NavLink to="/users"> Users page</NavLink>
    </div>
   
   
    <h3>Home Page</h3>
   
   <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
   <Outlet></Outlet>
    </>
  )
}

export default App
