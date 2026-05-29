import { motion } from 'framer-motion';
import { dining } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/dining.css';

export default function Dining() {
  return (
    <section id="dining" className="section dining bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Culinary Journey</span>
            <h2 className="section-title">Village Dining</h2>
            <p className="section-subtitle">
              Savour traditional recipes, regional thalis, and farm-to-table meals prepared
              with love in open-air settings.
            </p>
          </header>
        </SectionReveal>

        <div className="dining__grid">
          {dining.map((item, index) => (
            <motion.article
              key={item.id}
              className="dining__card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="dining__image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="dining__info glass-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
