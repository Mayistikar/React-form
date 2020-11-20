import React, { Fragment, useState } from 'react';

import Navbar from './components/Navbar';
import Form from './components/Form';

const App = () => {

  const [mainAppointments, setMain] = useState([]);

  const makeAppointment = appointment => setMain([ ...mainAppointments, appointment ]);

  return (
  <Fragment>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col">
          <Form
            makeAppointment={makeAppointment}
          />
        </div>
        <div className="col">2</div>
      </div>
    </div>
  </Fragment>
  );
};

export default App;
