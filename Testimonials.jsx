import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { testimonials } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/testimonials.css';

export default function Testimonials() {
  return (
    <section className="section testimonials bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Guest Stories</span>
            <h2 className="section-title">What Travellers Say</h2>
            <p className="section-subtitle">
              Real experiences from families and travellers who discovered the magic of
              Indian village life.
            </p>
          </header>
        </SectionReveal>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.id}
              className="testimonials__card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="testimonials__stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonials__text">&ldquo;{item.text}&rdquo;</p>
              <footer className="testimonials__author">
                <strong>{item.name}</strong>
                <span>{item.location}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
