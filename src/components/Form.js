import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

import Alert from '../components/Alert';

const Form = ({ makeAppointment }) => {

  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptons: ''
  });

  const [error, updateError] = useState(false);
 
  const updateState = (event) => {
    updateAppointment({
      ...appointment,
      [event.target.name]: event.target.value
    });
  }

  const { pet, owner, date, hour, symptons } = appointment;

  const submitAppointment = event => {
    event.preventDefault();

    if ( pet.trim() === ''
      || owner.trim() === ''
      || date.trim() === ''
      || hour.trim() === ''
      || symptons.trim() === '' )
    {
      updateError(true);
      return;
    }

    updateError(false);

    appointment.id = uuid();

    makeAppointment(appointment);

    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      hour: '',
      symptons: ''
    });
  };

  return (
    <Fragment>
      { error ? <Alert/> : null }
      <form
        onSubmit={submitAppointment}
      >
        <div className="form-group">
          <label>Nombre Mascota: </label>
          <input
            type="text"
            name="pet"
            className="form-control"
            placeholder="Nombre de tu mascota"
            onChange={updateState}
            value={pet}
          />
        </div>
        <div className="form-group">
          <label>Nombre Dueño: </label>
          <input
            type="text"
            name="owner"
            className="form-control"
            placeholder="Tu nombre"
            onChange={updateState}
            value={owner}
          />
        </div>
        <div className="form-group">
          <label>Fecha:</label>
          <input
            type="date"
            name="date"
            className="form-control"
            onChange={updateState}
            value={date}
          />
        </div>
        <div className="form-group">
          <label>Hora:</label>
          <input
            type="time"
            name="hour"
            className="form-control"
            onChange={updateState}
            value={hour}
          />
        </div>
        <div className="form-group">
          <label>Sintomas:</label>
          <textarea
            type="text"
            name="symptons"
            className="form-control"
            placeholder="Sintomas de la mascota"
            onChange={updateState}
            value={symptons}
          >
          </textarea>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary"
          >
            Agregar Cita
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;