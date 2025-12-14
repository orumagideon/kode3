import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

export default function Services() {
  const detailedServices = [
    {
      icon: '🎨',
      title: 'Web Design & UI/UX',
      description: 'We create stunning, intuitive interfaces that your users will love. Our design process combines user research, wireframing, and prototyping to deliver pixel-perfect results. Every design decision is backed by data and best practices.'
    },
    {
      icon: '⚙️',
      title: 'Web Application Development',
      description: 'From single-page applications to complex enterprise solutions, we build robust web applications. Using modern frameworks like React, Vue, and Node.js, we create fast, scalable, and maintainable code that stands the test of time.'
    },
    {
      icon: '💡',
      title: 'Technical Consulting',
      description: 'Need guidance on technology decisions? Our consultants work with you to define architecture, optimize performance, and implement best practices. We help you navigate the complexities of modern web development.'
    },
    {
      icon: '🚀',
      title: 'Future-Ready Scalable Solutions',
      description: 'We design systems that grow with your business. Our solutions are built with scalability, security, and performance in mind. As your needs evolve, your technology infrastructure is ready to support that growth.'
    }
  ];

  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive web solutions designed for your success</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="container">
          <div className="services-grid-detailed">
            {detailedServices.map((service, index) => (
              <div key={index} className="detailed-service">
                <ServiceCard {...service} />
                <div className="service-details">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery & Planning</h3>
              <p>We understand your goals, target audience, and business requirements to create a strategic roadmap.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design & Prototyping</h3>
              <p>Our designers create beautiful mockups and interactive prototypes for your approval before development.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development & Testing</h3>
              <p>Expert developers build your solution with clean, scalable code and rigorous quality assurance testing.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch & Support</h3>
              <p>We deploy your solution, monitor performance, and provide ongoing support for optimal results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack">
        <div className="container">
          <h2>Technology Stack</h2>
          <div className="tech-categories">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React & Vue.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vite & Webpack</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Tools & Infrastructure</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker & Kubernetes</li>
                <li>AWS & Cloud Services</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
