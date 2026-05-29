import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { farmTypes } from '../assets/data';
import '../styles/farmers.css';

const emptyForm = {
  farmerName: '',
  farmName: '',
  village: '',
  mobile: '',
  farmType: farmTypes[0],
  description: '',
  image: null,
  imagePreview: '',
};

export default function FarmerRegistration({ onRegister }) {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, image: file, imagePreview: preview }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      id: `farmer-${Date.now()}`,
      farmerName: form.farmerName,
      farmName: form.farmName,
      village: form.village,
      mobile: form.mobile,
      farmType: form.farmType,
      description: form.description,
      image:
        form.imagePreview ||
        'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
      activities: [],
      stayOptions: ['Cottage Stay'],
    });
    setSubmitted(true);
    setForm(emptyForm);
    if (fileRef.current) fileRef.current.value = '';
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.div
      className="farmers__form-wrap glass-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="farmers__panel-title">Farmer Registration</h3>
      <p className="farmers__panel-desc">Create your farm profile to list stays and activities.</p>

      <form className="farmers__form" onSubmit={handleSubmit}>
        <div className="farmers__field">
          <label htmlFor="farmerName">Farmer Name</label>
          <input
            type="text"
            id="farmerName"
            name="farmerName"
            value={form.farmerName}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>

        <div className="farmers__field">
          <label htmlFor="farmName">Farm Name</label>
          <input
            type="text"
            id="farmName"
            name="farmName"
            value={form.farmName}
            onChange={handleChange}
            placeholder="Green Valley Farm"
            required
          />
        </div>

        <div className="farmers__row">
          <div className="farmers__field">
            <label htmlFor="village">Village</label>
            <input
              type="text"
              id="village"
              name="village"
              value={form.village}
              onChange={handleChange}
              placeholder="Village, District"
              required
            />
          </div>
          <div className="farmers__field">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
            />
          </div>
        </div>

        <div className="farmers__field">
          <label htmlFor="farmType">Farm Type</label>
          <select id="farmType" name="farmType" value={form.farmType} onChange={handleChange}>
            {farmTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="farmers__field">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Tell guests about your farm and experiences..."
            rows={3}
            required
          />
        </div>

        <div className="farmers__field">
          <label>Farm Image</label>
          <button
            type="button"
            className="farmers__upload btn btn-glass"
            onClick={() => fileRef.current?.click()}
          >
            <HiOutlinePhotograph size={20} />
            {form.imagePreview ? 'Change Image' : 'Upload Image'}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="farmers__file-input"
            aria-hidden
          />
          {form.imagePreview && (
            <img src={form.imagePreview} alt="Farm preview" className="farmers__preview" />
          )}
        </div>

        <button type="submit" className="btn btn-primary farmers__submit">
          {submitted ? 'Profile Created ✓' : 'Create Profile'}
        </button>
      </form>
    </motion.div>
  );
}
