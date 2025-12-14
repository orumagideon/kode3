import React from 'react';
import '../styles/FounderCard.css';

export default function FounderCard({ image, name, role, bio, contact }) {
  return (
    <div className="founder-card">
      <div className="founder-image-wrapper">
        <img src={image} alt={name} className="founder-image" />
        <div className="image-overlay"></div>
      </div>
      <h3 className="founder-name">{name}</h3>
      <p className="founder-role">{role}</p>
      <p className="founder-bio">{bio}</p>
      {contact && (
        <a href={`https://wa.me/${contact.replace(/[^\d]/g, '')}`} className="founder-contact">
          💬 {contact}
        </a>
      )}
    </div>
  );
}
