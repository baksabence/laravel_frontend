import React from 'react'
import { useContext } from "react";
import { AuthContext } from '../contexts/AuthContext';

function Kezdolap() {
    
    const {user} = useContext(AuthContext);

  return (
    <div>
      <p>Kezdolap</p>
      <p>{user ? user.name : "Nincs bejelentkezett felhasználó"}</p>
    </div>
  )
}

export default Kezdolap
