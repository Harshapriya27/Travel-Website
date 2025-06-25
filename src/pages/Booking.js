import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Booking.css';

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const place = state?.place;

  // --- form state ---
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    checkIn: '',
    checkOut: '',
    accommodation: 'Hotel',
    requests: '',
  });

// If user reached Booking without a selected place
if (!place) {
    return (
      <div className="booking-container no-selection">
        <h2 className="no-selection-title">No destination selected</h2>
        <p className="no-selection-text">
          Please pick a destination from the&nbsp;
          <strong>Places</strong> page before booking.
        </p>
  
        <button
          className="go-places-button"
          onClick={() => navigate('/places')}
        >
          Browse Destinations
        </button>
      </div>
    );
  }
  

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ you can replace this with real API / Redux logic
    const bookingData = { ...form, place };

    // Pass bookingData to the confirmation page if you need it:
    navigate('/confirmation', { state: { place, booking: bookingData } });
  };

  return (
    <div className="booking-container">
      {/* ----------  Left: destination preview ---------- */}
      <aside className="booking-left">
        <h2 className="booking-title">{place.name}</h2>
        <img src={place.image} alt={place.name} className="booking-image" />
        <p className="booking-description">{place.description}</p>
        <p className="booking-rating">Rating: {place.rating} ★</p>
      </aside>

      {/* ----------  Right: booking form ---------- */}
      <section className="booking-right">
        <h3 className="form-heading">Complete Your Booking</h3>

        <form onSubmit={handleSubmit} className="booking-form">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <div className="inline-inputs">
          <label>
              Adults&nbsp;
            <input
              type="number"
              name="adults"
              min="1"
              placeholder="Adults"
              value={form.adults}
              onChange={handleChange}
              required
            />
            </label>

            <label>
              Children&nbsp;
            <input
              type="number"
              name="children"
              min="0"
              placeholder="Children"
              value={form.children}
              onChange={handleChange}
            />
            </label>
          </div>

          <div className="inline-inputs">
            <label>
              Check-in&nbsp;
              <input
                type="date"
                name="checkIn"
                value={form.checkIn}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Check-out&nbsp;
              <input
                type="date"
                name="checkOut"
                value={form.checkOut}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <select
            name="accommodation"
            value={form.accommodation}
            onChange={handleChange}
          >
            <option>Hotel</option>
            <option>Resort</option>
            <option>Hostel</option>
            <option>Villa</option>
            <option>Apartment</option>
          </select>

          <textarea
            name="requests"
            rows="4"
            placeholder="Special requests (optional)"
            value={form.requests}
            onChange={handleChange}
          />

          <button type="submit" className="confirm-button">
            Confirm Booking
          </button>
        </form>
      </section>
    </div>
  );
};

export default Booking;
