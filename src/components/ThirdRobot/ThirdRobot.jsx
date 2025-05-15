import React from 'react';
import './ThirdRobot.css'; // Импорт стилей
import mrk from '../../source/images/mrk-60.png'

const ThirdRobot = () => {
  return (
    <section className="third-robot-section">
      <div className="third-robot-container">
        {/* Левая часть с изображением */}
        <div className="third-robot-image">
          <img 
            src={mrk}
            alt="МРК-60"
          />
        </div>

        {/* Правая часть с текстом */}
        <div className="third-robot-content">
          <h1 className="third-robot-title">
            Мобильный робототехнический комплекс МРК-60
          </h1>
          <p className="third-robot-description">
            Нужен для проведения взрывотехнических и аварийно-спасательных работ.
          </p>
          <a href="#" className="third-robot-link">
            <span className="link-text">
              Узнать больше про МРК-60 →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThirdRobot;