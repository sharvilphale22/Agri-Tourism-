import { motion } from 'framer-motion';
import { FiEdit2, FiPlus } from 'react-icons/fi';
import '../styles/farmers.css';

export default function FarmerDashboard({ farmers }) {
  return (
    <motion.div
      className="farmers__dashboard"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="farmers__dashboard-header">
        <h3 className="farmers__panel-title">Farmer Dashboard</h3>
        <button type="button" className="btn btn-glass farmers__add-btn">
          <FiPlus aria-hidden />
          Add Farm
        </button>
      </div>

      <div className="farmers__profiles">
        {farmers.map((farmer, index) => (
          <motion.article
            key={farmer.id}
            className="farmers__profile glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <div className="farmers__profile-top">
              <img src={farmer.image} alt={farmer.farmName} className="farmers__avatar" />
              <div className="farmers__profile-info">
                <h4>{farmer.farmName}</h4>
                <span className="farmers__farmer-name">{farmer.farmerName}</span>
                <span className="farmers__location">{farmer.village}</span>
                <span className="farmers__contact">{farmer.mobile}</span>
              </div>
              <button type="button" className="farmers__edit" aria-label="Edit profile">
                <FiEdit2 />
              </button>
            </div>

            <p className="farmers__desc">{farmer.description}</p>

            <div className="farmers__meta">
              <span className="farmers__tag">{farmer.farmType}</span>
            </div>

            {farmer.activities?.length > 0 && (
              <div className="farmers__list-block">
                <strong>Activities</strong>
                <ul>
                  {farmer.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </div>
            )}

            {farmer.stayOptions?.length > 0 && (
              <div className="farmers__list-block">
                <strong>Stay Options</strong>
                <ul>
                  {farmer.stayOptions.map((stay) => (
                    <li key={stay}>{stay}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="farmers__gallery">
              <img src={farmer.image} alt={`${farmer.farmName} view`} />
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
