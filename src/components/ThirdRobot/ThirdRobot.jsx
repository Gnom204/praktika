import React from 'react';
import './ThirdRobot.css'; // Импорт стилей
import mrk from '../../source/images/mrk-60.png'
import { Link } from 'react-router';
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
          <Link to="/robot/mrc-60" className="more-link">
              Узнать больше про МРК-60
              <span className="arrow">→</span>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ThirdRobot;