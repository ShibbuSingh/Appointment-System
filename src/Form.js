import React from "react";

export default function Form(props) {

  let formData = props.formData;

  return (
    <section className="form-content">
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p>Welcome to Gradious Doctor Appointment Booking</p>
          </div>

          <div className="form-content">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Patient Name *"
                    value={formData.name}
                    onChange={props.handleChange}
                    name="name"
                  />
                </div>
                <div className="form-group" style={{marginBottom:"1.5rem"}}>
                  <select
                    className="form-control"
                    placeholder="Select Male/Female *"
                    value={formData.gender}
                    onChange={props.handleChange}
                    name="gender"
                  >
                    <option name="def" hidden>-- Male / Female --</option>
                    <option name="M">Male</option>
                    <option name="F">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Age *"
                    value={formData.age}
                    onChange={props.handleChange}
                    name="age"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number *"
                    value={formData.number}
                    onChange={props.handleChange}
                    name="number"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Date *"
                    value={formData.date}
                    onChange={props.handleChange}
                    name="date"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Time *"
                    value={formData.time}
                    onChange={props.handleChange}
                    name="time"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doctor Name *"
                    value={formData.docname}
                    onChange={props.handleChange}
                    name="docname"
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    placeholder="Select Consult/Revisit *"
                    value={formData.stat}
                    onChange={props.handleChange}
                    name="stat"
                  >
                    <option name="def" hidden>-- Consult / Revisit --</option>
                    <option name="Consult">Consult</option>
                    <option name="Revisit">Revisit</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" onClick={ formData.edit ? props.handleEdit : props.handleSubmit} className="btnSubmit">
              { formData.edit ? "Edit " : "Book "} Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
