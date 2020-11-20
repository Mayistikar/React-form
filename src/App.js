import React from 'react';

import healthLogo from './assets/health-report.svg';

const App = () => (
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src={healthLogo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy"/>
      Administrador de pacientes
    </a>
  </nav>
);

export default App;
