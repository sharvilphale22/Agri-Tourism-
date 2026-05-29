import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { navLinks } from '../assets/data';
import '../styles/footer.css';

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span>🌿</span> VillageRoots
          </Link>
          <p>
            Connecting travellers with authentic agri-tourism experiences across
            India&apos;s villages — sustainable, peaceful, and unforgettable.
          </p>
          <div className="footer__social">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/explore">Book Stay</Link>
            </li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <HiOutlineMail aria-hidden />
              <span>hello@villageroots.in</span>
            </li>
            <li>
              <HiOutlinePhone aria-hidden />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <HiOutlineLocationMarker aria-hidden />
              <span>Partner villages across India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; {year} VillageRoots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
