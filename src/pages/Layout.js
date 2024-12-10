import React from 'react';
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

function Layout() {

    const {kijelentkezes_fv} = useContext(AuthContext);


  return (
    <div className="container">
      <header className="App-header">
        <h1>React login és regisztráció</h1>
      </header>
      <nav>
          <ul class="nav">
      <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="/">Kezdolap</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bejelentkezes">Bejelentkezes</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/regisztracio">Regisztracio</Link>
      </li>
      <button onClick = {kijelentkezes_fv} type="button" class="btn btn-danger">Kijelentkezes</button>
    </ul>
    
      </nav>

      <article>
        <Outlet />
      </article>
      
      <footer>

      </footer>
    </div>
  )
}

export default Layout
