import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { farmTypes, budgetOptions, filterProperties } from '../assets/data';
import '../styles/explore.css';

const activityFilters = ['All', 'Wine Tasting', 'Organic Farming', 'Nature Walks', 'Village Cooking'];

export default function Explore() {
  const [searchParams] = useSearchParams();
  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [farmType, setFarmType] = useState('all');
  const [budget, setBudget] = useState('all');
  const [guests, setGuests] = useState(searchParams.get('guests') || '');
  const [dining, setDining] = useState(false);
  const [activity, setActivity] = useState('All');

  const urlLocation = searchParams.get('location') || '';
  const urlGuests = searchParams.get('guests') || '';

  const initialSearch = {
    location: urlLocation,
    checkIn: searchParams.get('checkIn') || '',
    checkOut: searchParams.get('checkOut') || '',
    guests: urlGuests || '2',
  };

  const filtered = useMemo(
    () =>
      filterProperties({
        location: location || urlLocation,
        farmType: farmType === 'all' ? '' : farmType,
        budget,
        guests: guests || urlGuests,
        dining,
        activity: activity === 'All' ? '' : activity,
      }),
    [location, urlLocation, farmType, budget, guests, urlGuests, dining, activity]
  );

  return (
    <main className="page page--explore">
      <div className="explore__header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="explore__title">Explore Village Stays</h1>
            <p className="explore__subtitle">
              {filtered.length} farms available for your countryside getaway
            </p>
          </motion.div>
          <SearchBar variant="compact" initialValues={initialSearch} />
        </div>
      </div>

      <div className="container explore__body">
        <div className="explore__filters">
          <input
            type="text"
            className="explore__filter-input"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            className="explore__filter-select"
            value={farmType}
            onChange={(e) => setFarmType(e.target.value)}
          >
            <option value="all">Farm Type</option>
            {farmTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <select
            className="explore__filter-select"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          >
            {budgetOptions.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
          <input
            type="number"
            className="explore__filter-input explore__filter-input--sm"
            placeholder="Guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
          <button
            type="button"
            className={`explore__chip ${dining ? 'explore__chip--active' : ''}`}
            onClick={() => setDining(!dining)}
          >
            Dining
          </button>
          {activityFilters.map((act) => (
            <button
              key={act}
              type="button"
              className={`explore__chip ${activity === act ? 'explore__chip--active' : ''}`}
              onClick={() => setActivity(act)}
            >
              {act}
            </button>
          ))}
        </div>

        <div className="explore__grid">
          {filtered.length > 0 ? (
            filtered.map((property, index) => (
              <PropertyCard key={property.id} property={property} index={index} />
            ))
          ) : (
            <p className="explore__empty">No farms match your filters. Try adjusting your search.</p>
          )}
        </div>
      </div>
    </main>
  );
}
