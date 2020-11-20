import React, { Fragment } from 'react';

const Appointment = ({ appointment }) => {
  const { pet, owner, date, hour, symptons } = appointment;

  return (
    <Fragment>
      <div className="card text-white bg-info mb-3">
        <div className="card-body">
          <h5 className="card-title">{pet}</h5>
          <h6 className="card-subtitle mb-2 text-black">Dueño: {owner}</h6>
          <small><b>Ingreso: </b>{date} - {hour}</small>
          <div class="card-body">
            <p className="card-text"><b>Síntomas:</b> {symptons}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Appointment;