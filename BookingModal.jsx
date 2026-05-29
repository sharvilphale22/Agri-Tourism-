import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { calculateNights, formatPrice } from '../utils/booking';
import '../styles/modal.css';
import '../styles/booking-modal.css';

export default function BookingModal({
  isOpen,
  onClose,
  title = 'Confirm Booking',
  subtitle,
  checkIn,
  checkOut,
  guests,
  pricePerNight,
  stayType,
  type = 'stay',
  timeSlot,
  onConfirm,
}) {
  const nights = calculateNights(checkIn, checkOut);
  const guestCount = parseInt(guests, 10) || 1;
  const subtotal =
    type === 'dining'
      ? 500 * guestCount
      : pricePerNight && nights > 0
        ? nights * pricePerNight
        : 0;
  const serviceFee = subtotal ? Math.round(subtotal * 0.08) : Math.round(500 * guestCount * 0.08);
  const total = subtotal ? subtotal + serviceFee : 500 * guestCount + serviceFee;

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />
          <div className="modal__wrapper">
            <motion.div
              className="modal booking-modal"
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            >
              <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
                <HiX size={22} />
              </button>

              <h3 className="modal__title">{title}</h3>
              {subtitle && <p className="modal__subtitle">{subtitle}</p>}

              <div className="booking-modal__summary">
                {type === 'stay' && (
                  <>
                    <div className="booking-modal__row">
                      <span>Stay type</span>
                      <strong>{stayType}</strong>
                    </div>
                    <div className="booking-modal__row">
                      <span>Check-in</span>
                      <strong>{checkIn || '—'}</strong>
                    </div>
                    <div className="booking-modal__row">
                      <span>Check-out</span>
                      <strong>{checkOut || '—'}</strong>
                    </div>
                    <div className="booking-modal__row">
                      <span>Guests</span>
                      <strong>{guests}</strong>
                    </div>
                    {nights > 0 && (
                      <div className="booking-modal__row">
                        <span>{formatPrice(pricePerNight)} × {nights} nights</span>
                        <strong>{formatPrice(subtotal)}</strong>
                      </div>
                    )}
                  </>
                )}
                {type === 'dining' && (
                  <>
                    <div className="booking-modal__row">
                      <span>Date</span>
                      <strong>{checkIn || '—'}</strong>
                    </div>
                    <div className="booking-modal__row">
                      <span>Time</span>
                      <strong>{timeSlot || '—'}</strong>
                    </div>
                    <div className="booking-modal__row">
                      <span>Guests</span>
                      <strong>{guests}</strong>
                    </div>
                  </>
                )}
                <div className="booking-modal__row booking-modal__row--fee">
                  <span>Service fee</span>
                  <strong>{formatPrice(serviceFee)}</strong>
                </div>
                <div className="booking-modal__row booking-modal__row--total">
                  <span>Total</span>
                  <strong>{formatPrice(total)}</strong>
                </div>
              </div>

              <button type="button" className="btn btn-primary booking-modal__confirm" onClick={onConfirm}>
                Confirm Booking
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
