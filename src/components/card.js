// src/components/ui/card.js

import React from 'react';
import './card.css'; 

export const Card = ({ children, className }) => (
  <div className={`card ${className || ''}`}>{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle = ({ children }) => (
  <h3 className="card-title">{children}</h3>
);

export const CardDescription = ({ children }) => (
  <p className="card-description">{children}</p>
);

export default Card;
