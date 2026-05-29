import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { popularDestinations } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/destinations.css';

export default function PopularDestinations() {
  const navigate = useNavigate();

  const goToExplore = (query) => {
    const params = new URLSearchParams(query);
    navigate(`/explore?${params.toString()}`);
  };

  return (
    <section className="section destinations bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Discover</span>
            <h2 className="section-title">Popular Destinations</h2>
            <p className="section-subtitle">
              Explore agri-tourism across India&apos;s most loved rural regions.
            </p>
          </header>
        </SectionReveal>

        <div className="destinations__grid">
          {popularDestinations.map((dest, index) => (
            <motion.button
              key={dest.id}
              type="button"
              className="destinations__card"
              onClick={() => goToExplore(dest.query)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <img src={dest.image} alt={dest.name} loading="lazy" />
              <div className="destinations__overlay" />
              <div className="destinations__info">
                <h3>{dest.name}</h3>
                <p>{dest.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
