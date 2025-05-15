import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{backgroundColor: '#005AC2'}}>
      <div className="footer-container">
        {/* Левая часть с контактами */}
        <div className="footer-contacts">
          <h2 className="footer-title">Свяжитесь с нами</h2>
          <p className="footer-subtitle">Мы всегда готовы ответить на ваши вопросы</p>
          
          <div className="contact-items">
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-text">напишите нам на почту sktb_pr@mail.ru</span>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span className="contact-text">+7 (XXX) XXX-XX-XX</span>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text"> г. Москва, Волгоградский проспект, д. 42, корп. 5, этаж 2, сектор D, помещение I</span>
            </div>
          </div>
        </div>

        {/* Правая часть с картой */}
        <div className="footer-map">
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa11a157b907ca593e6614c145bcf7b1eb87405bb0bf73324caaba905bfc818ac&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;