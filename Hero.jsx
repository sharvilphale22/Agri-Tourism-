import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';
import '../styles/hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero hero--home">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85"
          alt="Indian countryside at golden hour"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content container hero__content--home">
        <motion.span
          className="hero__label"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Agri-Tourism Across India
        </motion.span>

        <motion.h1
          className="hero__title"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Experience Real Village Life
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Nature, farming, local food, and peaceful stays
        </motion.p>

        <motion.div
          className="hero__search-wrap"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <SearchBar variant="hero" />
        </motion.div>

        <motion.div
          className="hero__actions hero__actions--minimal"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <Link to="/explore" className="btn btn-secondary">
            Browse All Farms
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
