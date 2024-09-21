import React from 'react';

const CardGrid = () => {
  const cards = [
    { id: 1, title: 'Title', body: 'Body text for whatever you\'d like to say.' },
    { id: 2, title: 'Title', body: 'Body text for whatever you\'d like to say.' },
    { id: 3, title: 'Title', body: 'Body text for whatever you\'d like to say.' },
    { id: 4, title: 'Title', body: 'Body text for whatever you\'d like to say.' },
    { id: 5, title: 'Title', body: 'Body text for whatever you\'d like to say.' },
    { id: 6, title: 'Title', body: 'Body text for whatever you\'d like to say.' }
  ];

  return (
    <div className="card-grid-container">
      <div className="heading-section">
        <h2>Heading</h2>
        <p>Subheading</p>
      </div>
      <div className="card-grid">
        {cards.map(card => (
          <div className="card-g" key={card.id}>
            <div className="card-image-g">
              <img src="placeholder-image.jpg" alt="Placeholder" />
            </div>
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
