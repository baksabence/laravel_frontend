import React from 'react';
import { useState, useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

function Regisztracio() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPassword_Confirmation] = useState("")

    const {regisztracio_fv} = useContext(AuthContext)

    function handleSubmit(e){
        e.preventDefault();
    

    const adat={
        name:name,
        email:email,
        password:password,
        password_confirmation:password_confirmation
    }
    console.log(adat)
    regisztracio_fv(adat)
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">Név</label>
          <input type="text" className="form-label" id="name"  placeholder="Név" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="email">Email cím</label>
          <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Jelszó" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password_confirmation">Password</label>
          <input type="password" className="form-control" id="password_confirmation" placeholder="Jelsző megerősítés" value={password_confirmation} onChange={(e)=>setPassword_Confirmation(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Regisztráció</button>
      </form>
    </div>
  );
}


export default Regisztracio;
