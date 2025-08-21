import React, { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    seats: "",
    email: "",
    notes: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Reservation Submitted:", formData);

    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      seats: "",
      email: "",
      notes: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="reservation-section">
      <div className="reservation-header">
        <h4>TASTY AND CRUNCHY</h4>
        <h2>RESERVATIONS</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="seats"
          placeholder="Seats *"
          value={formData.seats}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        <button type="submit">RESERVE</button>
      </form>

      {success && (
        <p className="success-msg">Reservation submitted successfully!</p>
      )}
    </section>
  );
};

export default ReservationForm;
