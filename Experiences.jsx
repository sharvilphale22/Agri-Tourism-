import { motion } from 'framer-motion';
import { experiences } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/experiences.css';

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

export default function Experiences() {
  return (
    <section id="experiences" className="section experiences bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Village Experiences</h2>
            <p className="section-subtitle">
              Immerse yourself in authentic rural India — from dawn in the fields to
              evenings by the fire, across villages nationwide.
            </p>
          </header>
        </SectionReveal>

        <motion.div
          className="experiences__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              className="experiences__card glass-card"
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.35 }}
            >
              <div className="experiences__image-wrap">
                <img src={exp.image} alt={exp.title} loading="lazy" />
                <div className="experiences__image-overlay" />
              </div>
              <div className="experiences__body">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
