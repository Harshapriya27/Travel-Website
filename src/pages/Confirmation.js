import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/Confirmation.css';

const Confirmation = () => {
  const { state } = useLocation();

  /* Fallback to localStorage in case someone refreshes */
  const stored = JSON.parse(localStorage.getItem('lastBooking')) || {};
  const place   = state?.place   || stored.place;
  const booking = state?.booking || stored;

  if (!place || !booking) {
    return <div className="confirmation-container">Invalid booking details.</div>;
  }

  return (
    <div className="confirmation-container">
      <h2 className="confirmation-title">🎉 Booking Confirmed!</h2>

      {/* -------- two-column wrapper -------- */}
      <div className="confirmation-body">
        {/* ----- Left: destination image ----- */}
        <div className="confirmation-left">
          <img
            src={place.image}
            alt={place.name}
            className="confirmation-image"
          />
          <h3 className="confirmation-place">{place.name}</h3>
        </div>

        {/* ----- Right: details ----- */}
        <div className="confirmation-details">
          <h4>Your Details</h4>
          <ul>
            <li><strong>Name:</strong> {booking.fullName}</li>
            <li><strong>Email:</strong> {booking.email}</li>
            <li><strong>Phone:</strong> {booking.phone}</li>
            <li>
              <strong>Guests:</strong> {booking.adults} Adult
              {booking.adults > 1 && 's'}, {booking.children} Child
              {booking.children !== 1 && 'ren'}
            </li>
            <li>
              <strong>Stay:</strong> {booking.checkIn} → {booking.checkOut}
            </li>
            <li><strong>Accommodation:</strong> {booking.accommodation}</li>
            {booking.requests && (
              <li><strong>Requests:</strong> {booking.requests}</li>
            )}
          </ul>
        </div>
      </div>

      <Link to="/" className="confirmation-home">Back to Home</Link>
    </div>
  );
};

export default Confirmation;
