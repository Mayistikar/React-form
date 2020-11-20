import React, { Fragment, useState } from 'react';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Appointment from './components/Appointment';

const App = () => {

  const [mainAppointments, setMain] = useState([]);

  const makeAppointment = appointment => setMain([ ...mainAppointments, appointment ]);

  return (
  <Fragment>
    <Navbar/>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Crear cita</h2>
          <hr/>
          <Form
            makeAppointment={makeAppointment}
          />
        </div>
        <div className="col">
          <h2>Administra tu cita</h2>
          <hr/>
          {
            mainAppointments.map(appointment => {
              return (
                <Appointment
                  key={appointment.id}
                  appointment={appointment}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  </Fragment>
  );
};

export default App;
