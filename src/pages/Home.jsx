import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import '../styles/Home.css';

export default function Home() {
  const services = [
    {
      icon: '🎨',
      title: 'Web Design & UI/UX',
      description: 'Beautiful, user-centered designs that convert visitors into customers. We craft intuitive interfaces with modern aesthetics.'
    },
    {
      icon: '⚙️',
      title: 'Web Application Development',
      description: 'Scalable, high-performance web applications built with cutting-edge technologies. From concept to production, we deliver excellence.'
    },
    {
      icon: '💡',
      title: 'Technical Consulting',
      description: 'Expert guidance on technology strategy, architecture, and best practices. We help you make informed decisions for your business.'
    }
  ];

  const strengths = [
    {
      number: '1',
      title: 'Expert Team',
      description: 'Experienced developers and designers with proven track records'
    },
    {
      number: '2',
      title: 'Fast & Scalable',
      description: 'Performance-optimized solutions that grow with your business'
    },
    {
      number: '3',
      title: 'Modern Tech Stack',
      description: 'Latest frameworks and technologies for future-ready solutions'
    },
    {
      number: '4',
      title: 'Customer Focused',
      description: 'Your success is our priority. We partner with you every step of the way'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">We Build Scalable, High-Performance Web Solutions</h1>
          <p className="hero-subtitle">
            Transform your business with cutting-edge web design, development, and technical consulting.
            Partner with Kode3 to create digital experiences that matter.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-subtitle">Comprehensive solutions tailored to your needs</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Kode3 */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Kode3?</h2>
          <p className="section-subtitle">We combine expertise, innovation, and dedication to deliver exceptional results</p>
          
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-card">
                <div className="strength-number">{strength.number}</div>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Digital Presence?</h2>
          <p>Let's work together to bring your vision to life</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start Your Project</Link>
        </div>
      </section>
    </div>
  );
}
