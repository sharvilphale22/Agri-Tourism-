import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { properties } from '../assets/data';
import PropertyCard from './PropertyCard';
import SectionReveal from './SectionReveal';

export default function FeaturedStays() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section featured-stays">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Handpicked</span>
            <h2 className="section-title">Featured Stays</h2>
            <p className="section-subtitle">
              Curated farm stays loved by travellers — book your village escape today.
            </p>
          </header>
        </SectionReveal>

        <div className="featured-stays__grid">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>

        <motion.div
          className="featured-stays__more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/explore" className="btn btn-outline">
            View All Farms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
