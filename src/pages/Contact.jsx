import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's discuss how we can help</p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="contact-method">
              <div className="method-icon">✉️</div>
              <div className="method-content">
                <h3>Email</h3>
                <a href="mailto:hello@kode3.com">hello@kode3.com</a>
                <p>We typically respond within 24 hours</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📱</div>
              <div className="method-content">
                <h3>Phone</h3>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
                <p>Available Monday - Friday, 9AM - 6PM EST</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">💬</div>
              <div className="method-content">
                <h3>WhatsApp</h3>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  Chat with us on WhatsApp
                </a>
                <p>Quick response for urgent matters</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="method-icon">📍</div>
              <div className="method-content">
                <h3>Office</h3>
                <p>Remote-First Company</p>
                <p>Serving clients globally with flexible collaboration</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does a typical project take?</h3>
              <p>Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months or more. We'll provide a detailed timeline during our initial consultation.</p>
            </div>

            <div className="faq-item">
              <h3>What's your development process?</h3>
              <p>We follow a structured process: discovery, design, prototyping, development, testing, and launch. We maintain transparent communication throughout and provide regular updates on progress.</p>
            </div>

            <div className="faq-item">
              <h3>Do you provide ongoing support?</h3>
              <p>Yes! We offer maintenance and support packages to keep your website running smoothly. We can handle updates, security patches, performance optimization, and feature additions.</p>
            </div>

            <div className="faq-item">
              <h3>What if we need to scale later?</h3>
              <p>Our solutions are built with scalability in mind from the start. As your business grows, your web application can grow with it without major rewrites or restructuring.</p>
            </div>

            <div className="faq-item">
              <h3>How do you handle mobile responsiveness?</h3>
              <p>All our projects are built mobile-first. We test across all devices and screen sizes to ensure a perfect experience whether your users are on phones, tablets, or desktops.</p>
            </div>

            <div className="faq-item">
              <h3>Can we see examples of your work?</h3>
              <p>Absolutely! Our portfolio showcases our best work. Feel free to reach out and we can discuss specific projects that match your industry or needs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
