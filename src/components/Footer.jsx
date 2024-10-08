import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-icons">
        <div className='logo'>Pj</div>
        <div className="social-icons">
          <span>📸</span> 
          <span>🐦</span> 
          <span>🎥</span>
          <span>🔗</span>
        </div>
      </div>
      
      <div className="footer-links">
        <div className="footer-column">
          <h4>Use cases</h4>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
            <li>Online whiteboard</li>
            <li>Team collaboration</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
            <li>Design systems</li>
            <li>Collaboration features</li>
            <li>Design process</li>
            <li>FigJam</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Best practices</li>
            <li>Colors</li>
            <li>Color wheel</li>
            <li>Support</li>
            <li>Developers</li>
            <li>Resource library</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
