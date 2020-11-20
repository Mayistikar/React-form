import React from 'react';

import healthLogo from '../assets/health-report.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="http://localhost:3000">
        <img src={healthLogo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
        Administrador de pacientes
      </a>
    </nav>
  );
};

export default Navbar;