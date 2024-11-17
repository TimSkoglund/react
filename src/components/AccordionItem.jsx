import React, { useState } from 'react';

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Hantera om accordionen är öppen eller stängd

  const toggleAccordion = () => {
    setIsOpen(prevState => !prevState); // Växla öppning och stängning
  };

  return (

      <details open={isOpen} onToggle={toggleAccordion}>
        <summary>
          {item.title}
          <div className="summary-icon">
            <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
          </div>
        </summary>
        <p>{item.content}</p>
      </details>

  );
};

export default AccordionItem;
