import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/explore', label: 'Explore' },
    { path: '/dining', label: 'Dining' },
    { path: '/farmers', label: 'Farmers Market' },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        background: '#f8f8f5',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <NavLink
          to="/"
          style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '1.5rem',
            fontWeight: '700',
          }}
        >
          🌿 VillageRoots
        </NavLink>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
          }}
        >
          ☰
        </button>

        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleNavClick}
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#166534' : '#304561',
                fontWeight: '600',
                transition: '0.3s',
              })}
            >
              {link.label}
            </NavLink>
          ))}

          <button
            style={{
              background: '#2f6b2f',
              color: '#fff8f5',
              border: 'none',
              padding: '0.9rem 1.8rem',
              borderRadius: '999px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Book Village Stay
          </button>
        </div>
      </nav>
    </header>
  );
}
