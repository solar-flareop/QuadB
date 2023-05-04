import React, { useState } from "react";

const Modal = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [seats, setSeats] = useState(2);

  const handleSubmit = (event) => {
    event.preventDefault();

    const booking = {
      name,
      email,
      seats,
      show: show.name,
      schedule: show.schedule,
      date: new Date().toISOString(),
    };

    localStorage.setItem("booking", JSON.stringify(booking));
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Book Now
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Book Tickets
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="showname" class="form-label">
                    Show Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="showname"
                    value={show.name}
                  />
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="xyz@gmail.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="seats" class="form-label">
                    Seats:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="seats"
                    value={seats}
                    onChange={(event) => setSeats(event.target.value)}
                    placeholder="Total seats"
                  />
                </div>
                <select className="form-select-sm">
                  <option selected disabled>
                    Available slots
                  </option>
                  <option value={show.schedule}>
                    {show.schedule.time} - {show.schedule.days[0]}
                  </option>
                </select>
                <hr />
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Book - {seats} Seats
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
