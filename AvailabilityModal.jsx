import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { stayTypes } from '../assets/data';
import '../styles/modal.css';

function getAvailability(checkIn, checkOut, guests) {
  if (!checkIn || !checkOut || !guests) return null;

  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const guestCount = parseInt(guests, 10);

  if (end <= start || Number.isNaN(guestCount) || guestCount < 1) return null;

  const nights = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  const dayOfWeek = start.getDay();

  if (nights > 4 || guestCount > 5 || dayOfWeek === 0 || dayOfWeek === 6) {
    return 'limited';
  }
  return 'available';
}

export default function AvailabilityModal({ isOpen, onClose, defaultStayType }) {
  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    stayType: defaultStayType || 'Cottage Stay',
  });
  const [result, setResult] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (isOpen && defaultStayType) {
      setForm((prev) => ({ ...prev, stayType: defaultStayType }));
    }
  }, [isOpen, defaultStayType]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setChecked(false);
    setResult(null);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const status = getAvailability(form.checkIn, form.checkOut, form.guests);
    setResult(status);
    setChecked(true);
  };

  const handleClose = () => {
    setChecked(false);
    setResult(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            aria-hidden
          />
          <div className="modal__wrapper">
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="availability-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <button type="button" className="modal__close" onClick={handleClose} aria-label="Close">
              <HiX size={22} />
            </button>

            <h3 id="availability-title" className="modal__title">
              Check Availability
            </h3>
            <p className="modal__subtitle">Select your dates and preferences</p>

            <form className="modal__form" onSubmit={handleCheck}>
              <div className="modal__row">
                <div className="modal__field">
                  <label htmlFor="avail-checkin">Check-in Date</label>
                  <input
                    type="date"
                    id="avail-checkin"
                    name="checkIn"
                    value={form.checkIn}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="modal__field">
                  <label htmlFor="avail-checkout">Check-out Date</label>
                  <input
                    type="date"
                    id="avail-checkout"
                    name="checkOut"
                    value={form.checkOut}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="modal__row">
                <div className="modal__field">
                  <label htmlFor="avail-guests">Guests</label>
                  <input
                    type="number"
                    id="avail-guests"
                    name="guests"
                    min="1"
                    max="20"
                    value={form.guests}
                    onChange={handleChange}
                    placeholder="2"
                    required
                  />
                </div>
                <div className="modal__field">
                  <label htmlFor="avail-stay">Stay Type</label>
                  <select
                    id="avail-stay"
                    name="stayType"
                    value={form.stayType}
                    onChange={handleChange}
                  >
                    {stayTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-primary modal__submit">
                Check Availability
              </button>
            </form>

            <AnimatePresence>
              {checked && result && (
                <motion.div
                  className={`modal__result modal__result--${result}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.35 }}
                >
                  {result === 'available' ? (
                    <>
                      <span className="modal__result-icon">✓</span>
                      <strong>Rooms Available</strong>
                      <p>Great choice! This stay type has rooms open for your dates.</p>
                    </>
                  ) : (
                    <>
                      <span className="modal__result-icon">!</span>
                      <strong>Limited Availability</strong>
                      <p>Few rooms remain — book soon or try alternate dates.</p>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
