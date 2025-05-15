import React from 'react';
import mrk from '../../source/images/mrk-15.png'
import './FirstRobot.css'; // Подключаем стили

const FirstRobot = () => {
  return (
    <section className="first-robot">
      <div className="content-container">
        {/* Текстовая часть */}
        <div className="text-content">
          <h1 className="title" style={{ color: '#005AC2' }}>
            Роботы, которые идут туда,<br/>где человек не может
          </h1>
          <p className="description">
            Разрабатываем мобильные комплексы для работы в радиации,<br/> 
            зонах обрушений и боевых действий. Адаптивные движители,<br/>
            манипуляторы-гиганты и модульный дизайн — ваш надежный<br/> 
            инструмент в критических ситуациях.
          </p>
          <div className="link-container">
            <a href="#" className="more-link">
              Узнать больше про МРК-15
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

        {/* Графическая часть */}
        <div className="image-container">
          <div className="blue-square"></div>
          <img 
            src={mrk} 
            alt="Робот МРК-15"
            className="robot-image"
          />
        </div>
      </div>
    </section>
  );
};

export default FirstRobot;