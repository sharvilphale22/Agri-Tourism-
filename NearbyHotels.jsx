import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { nearbyHotels } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/experiences.css';
import '../styles/card-actions.css';
import '../styles/nearby-hotels.css';

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function NearbyHotels() {
  return (
    <section id="hotels" className="section nearby-hotels bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Comfort Nearby</span>
            <h2 className="section-title">Nearby Hotels & Resorts</h2>
            <p className="section-subtitle">
              Premium stays around Nashik&apos;s vineyard belt — ideal before or after
              your village farm experience.
            </p>
          </header>
        </SectionReveal>

        <motion.div
          className="experiences__grid nearby-hotels__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {nearbyHotels.map((hotel) => (
            <motion.article
              key={hotel.id}
              className="experiences__card glass-card"
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <div className="experiences__image-wrap">
                <img src={hotel.image} alt={hotel.title} loading="lazy" />
                <div className="experiences__image-overlay" />
              </div>
              <div className="experiences__body">
                <div className="nearby-hotels__rating">
                  <FaStar aria-hidden />
                  <span>{hotel.rating}</span>
                </div>
                <h3>{hotel.title}</h3>
                <p>{hotel.description}</p>
                <a href="#booking" className="btn btn-primary card-action__btn">
                  View Stay
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
