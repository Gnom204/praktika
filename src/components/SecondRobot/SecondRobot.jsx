import React from 'react';
import './SecondRobot.css';
import rmm from '../../source/images/rmm-2.png'
import { Link } from 'react-router';

const MedicalManipulator = () => {
  return (
    <section className="medical-manipulator">
      <div className="content-container">
        {/* Текстовая часть */}
        <div className="text-content">
          <h1 className="title">
            Первый медицинский манипулятор в России “РММ-2”
          </h1>
          <p className="description">
            Роботизированный медицинский манипулятор «РММ-2» обеспечивает проведение высокоточных операций 
            с меньшим травматизмом для пациента, лучшим ближайшим и отдаленным результатом и значительным 
            сокращением сроков реабилитации в медицинских учреждениях.
          </p>
          <div className="link-container">
            <Link to="/robot/rmm-2" className="more-link">
              Узнать больше про РММ-2
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        {/* Графическая часть */}
        <div className="image-container">
          <img 
            src={rmm}
            alt="Медицинский манипулятор РММ-2"
            className="manipulator-image"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalManipulator;