import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { stays } from '../assets/data';
import SectionReveal from './SectionReveal';
import AvailabilityModal from './AvailabilityModal';
import '../styles/village-stay.css';

export default function VillageStay() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStay, setSelectedStay] = useState('Cottage Stay');

  const openAvailability = (stayTitle) => {
    setSelectedStay(stayTitle);
    setModalOpen(true);
  };

  return (
    <section id="stay" className="section village-stay">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Accommodation</span>
            <h2 className="section-title">Village Stay</h2>
            <p className="section-subtitle">
              Comfortable, eco-friendly stays designed for families, couples, and
              solo travellers exploring India&apos;s rural heartland.
            </p>
          </header>
        </SectionReveal>

        <div className="village-stay__grid">
          {stays.map((stay, index) => (
            <motion.article
              key={stay.id}
              className={`village-stay__card glass-card ${stay.featured ? 'village-stay__card--featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {stay.featured && <span className="village-stay__badge">Most Popular</span>}
              <div className="village-stay__image">
                <img src={stay.image} alt={stay.title} loading="lazy" />
              </div>
              <div className="village-stay__content">
                <h3>{stay.title}</h3>
                <div className="village-stay__price">
                  <span className="village-stay__amount">{stay.price}</span>
                  <span className="village-stay__period">{stay.period}</span>
                </div>
                <ul className="village-stay__amenities">
                  {stay.amenities.map((amenity) => (
                    <li key={amenity}>
                      <FiCheck aria-hidden />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
                <div className="village-stay__actions">
                  <a href="#booking" className="btn btn-primary village-stay__btn">
                    Book Now
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline village-stay__btn"
                    onClick={() => openAvailability(stay.title)}
                  >
                    Check Availability
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AvailabilityModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultStayType={selectedStay}
      />
    </section>
  );
}
