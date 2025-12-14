import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Kode3 Web Solutions</h3>
            <p>Building scalable, high-performance web solutions for modern businesses.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: <a href="mailto:hello@kode3.com">hello@kode3.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Chat with us</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kode3 Web Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
