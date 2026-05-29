import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { HiOutlinePhone } from 'react-icons/hi';
import { getPropertyById, propertyAttractions } from '../assets/data';
import BookingPanel from '../components/BookingPanel';
import SectionReveal from '../components/SectionReveal';
import '../styles/property-details.css';
import '../styles/experiences.css';
import '../styles/card-actions.css';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = getPropertyById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!property) {
    return <Navigate to="/explore" replace />;
  }

  const images = property.images || [property.image];

  return (
    <main className="page page--property">
      <div className="container property__gallery-section">
        <motion.div
          className="property__gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="property__hero-image">
            <motion.img
              key={activeImage}
              src={images[activeImage]}
              alt={property.farmName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="property__thumbs">
            {images.map((img, i) => (
              <button
                key={img}
                type="button"
                className={`property__thumb ${i === activeImage ? 'property__thumb--active' : ''}`}
                onClick={() => setActiveImage(i)}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container property__layout">
        <div className="property__main">
          <motion.header
            className="property__header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h1>{property.farmName}</h1>
              <p className="property__village">{property.village}</p>
            </div>
            <div className="property__rating-block">
              <FaStar aria-hidden />
              <span>
                {property.rating} · {property.reviewCount} reviews
              </span>
            </div>
          </motion.header>

          <SectionReveal>
            <div className="property__block">
              <h2>About this farm</h2>
              <p>{property.description}</p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="property__block">
              <h2>Amenities</h2>
              <ul className="property__list">
                {property.amenities.map((item) => (
                  <li key={item}>
                    <FiCheck aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="property__block">
              <h2>Activities</h2>
              <ul className="property__tags">
                {property.activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="property__block">
              <h2>Dining</h2>
              <ul className="property__tags">
                {property.diningOptions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/dining" className="btn btn-outline property__dining-link">
                Book Dining
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal>
            <article className="property__farmer glass-card">
              <img src={property.farmer.image} alt={property.farmer.name} />
              <div className="property__farmer-info">
                <div className="property__farmer-top">
                  <h3>{property.farmer.name}</h3>
                  {property.farmer.verified && (
                    <span className="property__verified">Verified Host</span>
                  )}
                </div>
                <p>{property.farmer.experience}</p>
                <a href={`tel:${property.farmer.mobile}`} className="btn btn-glass property__contact">
                  <HiOutlinePhone />
                  Contact Farmer
                </a>
              </div>
            </article>
          </SectionReveal>

          <SectionReveal>
            <div className="property__attractions">
              <h2>Nearby Attractions</h2>
              <p className="property__attractions-desc">
                Explore Nashik while staying at this farm.
              </p>
              <div className="experiences__grid property__attractions-grid">
                {propertyAttractions.map((place) => (
                  <article key={place.id} className="experiences__card glass-card">
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
                  </article>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        <div className="property__sidebar">
          <BookingPanel property={property} />
        </div>
      </div>
    </main>
  );
}
