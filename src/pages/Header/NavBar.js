import React from 'react';
import { Link } from 'react-router-dom'
import "bootstrap/js/src/collapse.js";

const NavBar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">HairCut</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to='/'> <a className="nav-link">Home<span className="sr-only">(Página atual)</span></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/schedule'> <a className="nav-link">Agendamentos<span className="sr-only">(Página atual)</span></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/clients'> <a className="nav-link">Clientes<span className="sr-only">(Página atual)</span></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/reports'> <a className="nav-link">Relatórios<span className="sr-only">(Página atual)</span></a></Link>
            </li>
            <li className="nav-item">
              <Link to='/config'> <a className="nav-link">Configurações<span className="sr-only">(Página atual)</span></a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;