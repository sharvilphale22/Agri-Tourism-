import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import Layout from './components/Layout';

import Home from './pages/Home';
import Explore from './pages/Explore';
import PropertyDetails from './pages/PropertyDetails';
import Dining from './pages/Dining';
import Farmers from './pages/Farmers';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} text-black/>
              <Route path="/Explore" element={<Explore />} />
              <Route path="/PropertyDetails/:id" element={<PropertyDetails />} />
              <Route path="/Dining" element={<Dining />} />
              <Route path="/Farmers" element={<Farmers />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
