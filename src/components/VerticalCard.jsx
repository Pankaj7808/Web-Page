import React from 'react';

const VerticalCardList = () => {
    const cards = [
        { 
          id: 1, 
          title: 'First Card', 
          body: 'This is the first card in our vertical list. It can contain detailed information about the subject matter.', 
          buttonText: 'Learn More'
        },
        { 
          id: 2, 
          title: 'Second Card', 
          body: 'The second card usually follows up with more insights. Here you might want to describe related topics or provide further reading links.', 
          buttonText: 'Read More'
        },
        { 
          id: 3, 
          title: 'Third Card', 
          body: 'Finally, the third card can summarize the content or provide a call to action for the user to engage further with the content.', 
          buttonText: 'Get Started'
        }
      ];

  return (
    <div className="vertical-card-list">
        <div>
        <h2>Heading</h2>
        <h4 style={{color:"#ddd"}}>Sub Heading</h4>
        </div>
        
      {cards.map(card => (
        <div className="v-card" key={card.id}>
          <div className="card-image">
            <img src="placeholder-image.jpg" alt="Placeholder" />
          </div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.body}</p>
            <button className='btn btn-primary'>Button</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCardList;
