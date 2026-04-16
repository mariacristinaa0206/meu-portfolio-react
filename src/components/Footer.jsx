import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Projetado e desenvolvido por M Cristina do N Silva.</p>
    </footer>
  );
};

export default Footer;