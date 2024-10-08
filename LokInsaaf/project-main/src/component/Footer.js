// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
            <li>Yakshit Khurana- 01315602721
            </li>
        </ul>
        <ul>
            <li>Riya Jain- 01815602721
            </li>
        </ul>
        <ul>
            <li>Nandini Sharma- 05515602721
            </li>
        </ul>
      </div>
      <div className="rights">
        &copy; {new Date().getFullYear()} LokInsaaf. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
