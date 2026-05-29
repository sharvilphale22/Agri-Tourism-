import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { stayTypes } from '../assets/data';
import { calculateNights, formatPrice } from '../utils/booking';
import BookingModal from './BookingModal';
import '../styles/booking-panel.css';

export default function BookingPanel({ property }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [stayType, setStayType] = useState(stayTypes[0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const nights = calculateNights(checkIn, checkOut);
  const subtotal = nights * property.pricePerNight;

  const handleReserve = () => {
    if (!checkIn || !checkOut) return;
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 4000);
  };

  return (
    <>
      <motion.aside
        className="booking-panel glass-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="booking-panel__price">
          <strong>{property.priceDisplay}</strong>
          <span> / night</span>
        </div>

        <div className="booking-panel__dates">
          <div className="booking-panel__field">
            <label htmlFor="panel-checkin">Check-in</label>
            <input
              id="panel-checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div className="booking-panel__field">
            <label htmlFor="panel-checkout">Check-out</label>
            <input
              id="panel-checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || undefined}
            />
          </div>
        </div>

        <div className="booking-panel__field">
          <label>Guests</label>
          <div className="booking-panel__stepper">
            <button
              type="button"
              onClick={() => setGuests((g) => Math.max(1, g - 1))}
              aria-label="Decrease guests"
            >
              <HiMinus />
            </button>
            <span>{guests}</span>
            <button
              type="button"
              onClick={() => setGuests((g) => Math.min(property.maxGuests, g + 1))}
              aria-label="Increase guests"
            >
              <HiPlus />
            </button>
          </div>
        </div>

        <div className="booking-panel__field">
          <label htmlFor="panel-stay">Stay type</label>
          <select
            id="panel-stay"
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
          >
            {stayTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {nights > 0 && (
          <p className="booking-panel__estimate">
            {formatPrice(property.pricePerNight)} × {nights} nights ={' '}
            <strong>{formatPrice(subtotal)}</strong>
          </p>
        )}

        <button
          type="button"
          className="btn btn-primary booking-panel__reserve"
          onClick={handleReserve}
          disabled={!checkIn || !checkOut}
        >
          Reserve Now
        </button>

        <p className="booking-panel__note">You won&apos;t be charged yet</p>

        {confirmed && (
          <motion.div
            className="booking-panel__confirmed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Booking confirmed! We&apos;ll contact you shortly.
          </motion.div>
        )}
      </motion.aside>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Review & Reserve"
        subtitle={property.farmName}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        pricePerNight={property.pricePerNight}
        stayType={stayType}
        type="stay"
        onConfirm={handleConfirm}
      />
    </>
  );
}
