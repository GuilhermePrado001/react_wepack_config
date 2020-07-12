import React from 'react';
import { Link } from 'react-router-dom'

const NavBarComponent = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">HairCut</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <Link to='/'> <a class="nav-link">Home<span class="sr-only">(Página atual)</span></a></Link>
            </li>
            <li class="nav-item">
              <Link to='/schedule'> <a class="nav-link">Agendamentos<span class="sr-only">(Página atual)</span></a></Link>
            </li>
            <li class="nav-item">
              <Link to='/clients'> <a class="nav-link">Clientes<span class="sr-only">(Página atual)</span></a></Link>
            </li>
            <li class="nav-item">
              <Link to='/reports'> <a class="nav-link">Relatórios<span class="sr-only">(Página atual)</span></a></Link>
            </li>
            <li class="nav-item">
              <Link to='/config'> <a class="nav-link">Configurações<span class="sr-only">(Página atual)</span></a></Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;