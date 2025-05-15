import './Hero.css'

function Hero() {
  return (
    <section className="hero">
        <div className="content">
            <h1 className='hero-title'>СКТБ ПР превращает экстремальные задачи в рутину.</h1>
            <p className="subtitle">
                Откройте для себя робототехнические решения, созданные для экстремальных задач: 
                от ликвидации радиационных ЧС до медицинских инноваций.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer" className="cta-link">
                Исследуйте решения
                <span className="arrow">→</span>
            </a>
        </div>
    </section>
  )
}

export default Hero