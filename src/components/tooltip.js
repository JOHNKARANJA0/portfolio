// src/components/ui/tooltip.js

import React from 'react';
import './tooltip.css';

export const TooltipProvider = ({ children }) => <>{children}</>;

export const Tooltip = ({ children }) => (
  <div className="tooltip">{children}</div>
);

export const TooltipTrigger = ({ children }) => (
  <span className="tooltip-trigger">{children}</span>
);

export const TooltipContent = ({ children }) => (
  <span className="tooltip-content">{children}</span>
);

export default Tooltip;
