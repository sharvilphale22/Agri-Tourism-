import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSearch, HiOutlineLocationMarker, HiOutlineCalendar, HiOutlineUsers } from 'react-icons/hi';
import { searchSuggestions } from '../assets/data';
import '../styles/search-bar.css';

const emptySearch = {
  location: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
};

export default function SearchBar({ variant = 'hero', initialValues = {} }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...emptySearch, ...initialValues });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (form.location) params.set('location', form.location);
    if (form.checkIn) params.set('checkIn', form.checkIn);
    if (form.checkOut) params.set('checkOut', form.checkOut);
    if (form.guests) params.set('guests', form.guests);
    navigate(`/explore?${params.toString()}`);
  };

  const pickSuggestion = (suggestion) => {
    setForm((prev) => ({ ...prev, location: suggestion }));
    setShowSuggestions(false);
  };

  return (
    <motion.form
      className={`search-bar glass-card search-bar--${variant}`}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: variant === 'hero' ? 0.5 : 0 }}
    >
      <div className="search-bar__field search-bar__field--location">
        <label htmlFor={`location-${variant}`}>
          <HiOutlineLocationMarker aria-hidden />
          Where
        </label>
        <input
          id={`location-${variant}`}
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          placeholder="Where do you want to go?"
          autoComplete="off"
        />
        <AnimatePresence>
          {showSuggestions && variant === 'hero' && (
            <motion.ul
              className="search-bar__suggestions"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              {searchSuggestions.map((item) => (
                <li key={item}>
                  <button type="button" onMouseDown={() => pickSuggestion(item)}>
                    {item}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="search-bar__divider" aria-hidden />

      <div className="search-bar__field">
        <label htmlFor={`checkin-${variant}`}>
          <HiOutlineCalendar aria-hidden />
          Check-in
        </label>
        <input
          id={`checkin-${variant}`}
          name="checkIn"
          type="date"
          value={form.checkIn}
          onChange={handleChange}
        />
      </div>

      <div className="search-bar__divider" aria-hidden />

      <div className="search-bar__field">
        <label htmlFor={`checkout-${variant}`}>
          <HiOutlineCalendar aria-hidden />
          Check-out
        </label>
        <input
          id={`checkout-${variant}`}
          name="checkOut"
          type="date"
          value={form.checkOut}
          onChange={handleChange}
        />
      </div>

      <div className="search-bar__divider" aria-hidden />

      <div className="search-bar__field">
        <label htmlFor={`guests-${variant}`}>
          <HiOutlineUsers aria-hidden />
          Guests
        </label>
        <input
          id={`guests-${variant}`}
          name="guests"
          type="number"
          min="1"
          max="20"
          value={form.guests}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary search-bar__submit">
        <HiOutlineSearch size={20} />
        <span>Search</span>
      </button>
    </motion.form>
  );
}
