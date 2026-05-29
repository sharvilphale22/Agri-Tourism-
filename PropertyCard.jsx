import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import '../styles/property-card.css';

export default function PropertyCard({ property, index = 0 }) {
  return (
    <motion.article
      className="property-card"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/property/${property.id}`} className="property-card__link">
        <div className="property-card__image-wrap">
          <img src={property.image} alt={property.farmName} loading="lazy" />
          <span
            className={`property-card__badge property-card__badge--${property.availability}`}
          >
            {property.availability === 'available' ? 'Available' : 'Limited'}
          </span>
        </div>
        <div className="property-card__body">
          <div className="property-card__meta">
            <h3>{property.farmName}</h3>
            <div className="property-card__rating">
              <FaStar aria-hidden />
              <span>{property.rating}</span>
            </div>
          </div>
          <p className="property-card__location">{property.village}</p>
          <p className="property-card__desc">{property.shortDescription}</p>
          <div className="property-card__footer">
            <div className="property-card__price">
              <strong>{property.priceDisplay}</strong>
              <span> / night</span>
            </div>
            <span className="btn btn-outline property-card__cta">View Details</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
