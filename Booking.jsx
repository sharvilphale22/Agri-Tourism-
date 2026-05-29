import { useState } from 'react';
import { motion } from 'framer-motion';
import { stayTypes } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/booking.css';

const initialForm = {
  name: '',
  email: '',
  date: '',
  guests: '',
  stayType: 'Cottage Stay',
};

export default function Booking() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 3000);
  };

  return (
    <section id="booking" className="section booking bg-forest-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header booking__header">
            <span className="section-label booking__label">Reserve Your Stay</span>
            <h2 className="section-title booking__title">Book Your Village Escape</h2>
            <p className="section-subtitle booking__subtitle">
              Plan your agri-tourism getaway at villages across India. We&apos;ll confirm
              your booking within 24 hours.
            </p>
          </header>
        </SectionReveal>

        <motion.div
          className="booking__wrapper glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form className="booking__form" onSubmit={handleSubmit}>
            <div className="booking__field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="booking__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </div>

            <div className="booking__row">
              <div className="booking__field">
                <label htmlFor="date">Check-in Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="booking__field">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="20"
                  value={form.guests}
                  onChange={handleChange}
                  placeholder="2"
                  required
                />
              </div>
            </div>

            <div className="booking__field">
              <label htmlFor="stayType">Stay Type</label>
              <select
                id="stayType"
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

            <button type="submit" className="btn btn-primary booking__submit">
              {submitted ? 'Booking Sent ✓' : 'Submit Booking'}
            </button>
          </form>

          <div className="booking__visual">
            <img
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80"
              alt="Peaceful village homestay"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
