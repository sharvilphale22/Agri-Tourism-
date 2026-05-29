import { motion } from 'framer-motion';
import { nashikPlaces } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/experiences.css';
import '../styles/card-actions.css';
import '../styles/nashik-places.css';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function NashikPlaces() {
  return (
    <section id="nashik" className="section nashik-places">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Explore Nashik</span>
            <h2 className="section-title">Nashik Highlights</h2>
            <p className="section-subtitle">
              Temples, vineyards, forts, and nature spots — perfect day trips while
              staying at nearby agri-tourism villages.
            </p>
          </header>
        </SectionReveal>

        <motion.div
          className="experiences__grid nashik-places__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {nashikPlaces.map((place) => (
            <motion.article
              key={place.id}
              className="experiences__card glass-card"
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <div className="experiences__image-wrap">
                <img src={place.image} alt={place.title} loading="lazy" />
                <div className="experiences__image-overlay" />
              </div>
              <div className="experiences__body">
                <h3>{place.title}</h3>
                <p>{place.description}</p>
                <button type="button" className="btn btn-outline card-action__btn">
                  Explore
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
