import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

import ContentWrapper from '../contentWrapper/ContentWrapper';

import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          At Cineverse, we believe that every movie has a story to tell, and we
          are dedicated to sharing those stories with our audience. From
          blockbusters to indie darlings, we cover a wide range of films and tv
          series that, offering a diverse and engaging perspective on the world
          of cinema. Thank you for visiting Cineverse, and we hope that our
          reviews inspire you to explore the wonderful world of movies. Don't
          forget to follow us on social media to stay up-to-date on the latest
          in movie news and reviews.
        </div>
        <div className="socialIcons">
          <a href="https://www.facebook.com/mubasshir07/" target="_blank">
            <span className="icon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/Amubasshir" target="_blank">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://twitter.com/lastmubasshir" target="_blank">
            <span className="icon">
              <FaTwitter />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/mubasshirahmed7/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
