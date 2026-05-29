import { useState } from 'react';
import { dummyFarmer } from '../assets/data';
import SectionReveal from './SectionReveal';
import FarmerRegistration from './FarmerRegistration';
import FarmerDashboard from './FarmerDashboard';
import '../styles/farmers.css';

export default function Farmers() {
  const [farmers, setFarmers] = useState([dummyFarmer]);

  const handleRegister = (profile) => {
    setFarmers((prev) => [profile, ...prev]);
  };

  return (
    <section id="farmers" className="section farmers bg-warm-gradient">
      <div className="container">
        <SectionReveal>
          <header className="section-header">
            <span className="section-label">Partner With Us</span>
            <h2 className="section-title">Farmer Profiles</h2>
            <p className="section-subtitle">
              Register your farm, list village activities, and connect with travellers
              seeking authentic agri-tourism experiences.
            </p>
          </header>
        </SectionReveal>

        <div className="farmers__layout">
          <FarmerRegistration onRegister={handleRegister} />
          <FarmerDashboard farmers={farmers} />
        </div>
      </div>
    </section>
  );
}
