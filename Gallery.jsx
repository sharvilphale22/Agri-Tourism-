import { motion } from 'framer-motion';
import { galleryImages } from '../assets/data';
import SectionReveal from './SectionReveal';
import '../styles/gallery.css';

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Moments</span>
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">
              Glimpses of village life, harvest seasons, and unforgettable stays across
              India&apos;s countryside.
            </p>
          </header>
        </SectionReveal>

        <motion.div
          className="gallery__grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              className={`gallery__item gallery__item--${(index % 3) + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={src} alt={`Village experience ${index + 1}`} loading="lazy" />
              <div className="gallery__overlay">
                <span>Village Life</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
