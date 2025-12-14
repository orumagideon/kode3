import React from 'react';
import FounderCard from '../components/FounderCard';
import '../styles/About.css';
import Gid1 from '../assets/founders/Gid1.jpg';
import Kev3 from '../assets/founders/Kev3.jpg';
import Eng2 from '../assets/founders/Eng2.JPG';

export default function About() {
  const founders = [
    {
      name: 'GIDEON ORUMA',
      role: 'CEO & Lead Developer',
      bio: 'Visionary leader with expertise in full-stack development and technical architecture. Drives innovation and ensures every project meets our high standards.',
      contact: '0718461521',
      image: Gid1
    },
    {
      name: 'Kevin Bett',
      role: 'CTO & Co-founder',
      bio: 'Full-stack developer passionate about scalable, high-performance solutions. Brings technical excellence and innovative problem-solving to every project.',
      contact: '0740148013',
      image: Kev3
    },
    {
      name: 'ABNER SANTOS',
      role: 'Design & Product Lead',
      bio: 'UX/UI expert focused on user-centric design and digital transformation. Creates beautiful, intuitive solutions that users love.',
      contact: '0741607228',
      image: Eng2
    }
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="container">
          <h1>About Kode3 Web Solutions</h1>
          <p>Passionate about building exceptional web solutions</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Kode3 was founded by a team of passionate developers and designers who believed there was a better way to build web solutions. 
                We started with a simple mission: create beautiful, scalable, high-performance websites and applications that help businesses succeed.
              </p>
              <p>
                What began as a small startup has grown into a trusted partner for companies of all sizes—from ambitious startups to established enterprises. 
                Our commitment to excellence, innovation, and client success has never wavered.
              </p>
            </div>
            <div className="story-visual">
              <div className="story-stat">
                <h3>50+</h3>
                <p>Projects Delivered</p>
              </div>
              <div className="story-stat">
                <h3>30+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="story-stat">
                <h3>8+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="container">
          <h2>Meet the Founders</h2>
          <p className="section-subtitle">Dedicated professionals with diverse expertise and a shared vision</p>
          
          <div className="founders-grid">
            {founders.map((founder, index) => (
              <FounderCard key={index} {...founder} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We pursue excellence in everything we do, from code quality to customer service.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We build trust through transparency, honesty, and delivering on our promises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💪</div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and methodologies to solve problems creatively.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Growth</h3>
              <p>We're committed to continuous improvement and helping our clients grow their business.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
