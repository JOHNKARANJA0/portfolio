// src/components/ui/tabs.js

import React, { useState } from 'react';
import './tabs.css';

export const Tabs = ({ children, defaultValue, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children, setActiveTab }) => (
  <div className="tabs-list">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { setActiveTab })
    )}
  </div>
);

export const TabsTrigger = ({ value, setActiveTab, children }) => (
  <button onClick={() => setActiveTab(value)}>{children}</button>
);

export const TabsContent = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="tabs-content">{children}</div> : null;
};

export default Tabs;
