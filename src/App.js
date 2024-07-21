import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import logo from './assets/images/logo.png';
import coachingChart from './assets/images/coaching-chart.PNG'; 
import coachImage1 from './assets/images/coach1.jpg';
import coachImage2 from './assets/images/coach2.jpg';
import coachImage3 from './assets/images/coach3.jpg';
import BookingForm from './BookingForm';
import Confirm from './Confirm';
import ReviewForm from './ReviewForm';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const coachingBenefits = language === 'en' ? `
    <h1>Enhance Your Rank with Personalized LoL Coaching</h1>
    <ul>
      <li><strong>Personalized Guidance:</strong> Tailored insights to improve your gameplay.</li>
      <li><strong>Experienced Coaches:</strong> Get advice from former pros and skilled players.</li>
      <li><strong>Replay Analysis:</strong> Receive constructive feedback to refine your techniques.</li>
      <li><strong>Meta Understanding:</strong> Stay adaptable to game updates and patches.</li>
      <li><strong>Faster Rank Climbing:</strong> Learn strategies for consistent victories.</li>
    </ul>
  ` : `
    <h1>Améliorez votre rang avec un coaching personnalisé de LoL</h1>
    <ul>
      <li><strong>Conseils personnalisés :</strong> Des idées adaptées pour améliorer votre jeu.</li>
      <li><strong>Entraîneurs expérimentés :</strong> Obtenez des conseils d'anciens pros et de joueurs qualifiés.</li>
      <li><strong>Analyse de replays :</strong> Recevez des commentaires constructifs pour affiner vos techniques.</li>
      <li><strong>Compréhension de la meta :</strong> Restez adaptable aux mises à jour et correctifs du jeu.</li>
      <li><strong>Montée en rang plus rapide :</strong> Apprenez des stratégies pour des victoires constantes.</li>
    </ul>
  `;

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="Summoner School Logo" />
            <h1>Summoner School</h1>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <ScrollLink
                  to="featured-coaches-section"
                  smooth={true}
                  duration={500}
                  offset={-50} 
                >
                  {language === 'en' ? 'Coaching Plans' : 'Plans de coaching'}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="review-section"
                  smooth={true}
                  duration={500}
                  offset={-50} 
                >
                  {language === 'en' ? 'Reviews' : 'Avis'}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="why-coaching-section"
                  smooth={true}
                  duration={500}
                  offset={-50} 
                >
                  {language === 'en' ? 'Why Get Coaching' : 'Pourquoi obtenir un coaching'}
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="faq-section"
                  smooth={true}
                  duration={500}
                  offset={-50} 
                >
                  {language === 'en' ? 'FAQ' : 'FAQ'}
                </ScrollLink>
              </li>
            </ul>
          </nav>
          <button onClick={toggleLanguage} className="button--secondary">
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={
              <>
                <section className="hero">
                  <div className="hero__overlay"></div>
                  <div className="hero__content">
                    <h2 className="hero__title">{language === 'en' ? 'Your Climb Starts Here' : 'Votre ascension commence ici'}</h2>
                    <p className="hero__description">
                      {language === 'en' ? 
                        'LoL Coaching from Highly skilled players. Learn the game with coaches who have great experiences and evolve your game to the next level and unleash your skill today. Start with Challenger Player and get your first League of Legends coaching lesson now.' :
                        'Coaching LoL par des joueurs très qualifiés. Apprenez le jeu avec des entraîneurs ayant de grandes expériences et faites évoluer votre jeu au niveau supérieur et libérez votre compétence aujourd\'hui. Commencez avec un joueur Challenger et obtenez votre première leçon de coaching League of Legends maintenant.'}
                    </p>
                    <button className="button--primary">{language === 'en' ? 'Get Started' : 'Commencer'}</button>
                  </div>
                </section>
                <Element name="review-section"></Element>
                <section className="reviews">
                  <h2 className="reviews__title">{language === 'en' ? 'Read Reviews' : 'Lire les avis'}</h2>
                  <div className="reviews__list">
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">{language === 'en' ? 'Their Review' : 'Leur avis'}</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">{language === 'en' ? 'Their Review' : 'Leur avis'}</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Username</div>
                        <div className="review__text">{language === 'en' ? 'Their Review' : 'Leur avis'}</div>
                      </div>
                    </div>
                  </div>
                  <Link to="/write-review" className="button--primary">{language === 'en' ? 'Write A Review' : 'Écrire une critique'}</Link>
                </section>
                <Element name="featured-coaches-section">
                  <section className="featured-coaches">
                    <h2 className="featured-coaches__title">{language === 'en' ? 'Featured Coaches' : 'Entraîneurs en vedette'}</h2>
                    <div className="coaches__list">
                      <div className="coach">
                        <img src={coachImage1} alt="Coach 1" className="coach__image" />
                        <div className="coach__details">
                          <h3 className="coach__name">Faker</h3>
                          <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                          <p className="coach__description">{language === 'en' ? 'Description about the coach.' : "Description de l'entraîneur."}</p>
                          <button className="button--primary">{language === 'en' ? 'Learn More' : 'En savoir plus'}</button>
                        </div>
                      </div>
                      <div className="coach">
                        <img src={coachImage2} alt="Coach 2" className="coach__image" />
                        <div className="coach__details">
                          <h3 className="coach__name">Canyon</h3>
                          <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                          <p className="coach__description">{language === 'en' ? 'Description about the coach.' : "Description de l'entraîneur."}</p>
                          <button className="button--primary">{language === 'en' ? 'Learn More' : 'En savoir plus'}</button>
                        </div>
                      </div>
                      <div className="coach">
                        <img src={coachImage3} alt="Coach 3" className="coach__image" />
                        <div className="coach__details">
                          <h3 className="coach__name">Perkz</h3>
                          <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                          <p className="coach__description">{language === 'en' ? 'Description about the coach.' : "Description de l'entraîneur."}</p>
                          <button className="button--primary">{language === 'en' ? 'Learn More' : 'En savoir plus'}</button>
                        </div>
                      </div>
                    </div>
                    <button className="button--secondary">{language === 'en' ? 'View All Coaches' : 'Voir tous les entraîneurs'}</button>
                  </section>
                </Element>
                <Element name="why-coaching-section">
                  <section className="why-coaching">
                    <h2 className="why-coaching__title">{language === 'en' ? 'Why Get Coaching?' : 'Pourquoi obtenir un coaching ?'}</h2>
                    <div className="why-coaching__content" dangerouslySetInnerHTML={{ __html: coachingBenefits }}></div>
                    <img src={coachingChart} alt="Coaching Chart" className="why-coaching__image" />
                  </section>
                </Element>
                <Element name="faq-section">
                  <section className="faq">
                    <h2 className="faq__title">{language === 'en' ? 'Frequently Asked Questions' : 'Questions fréquemment posées'}</h2>
                    <div className="faq__list">
                      <div className="faq__item">
                        <h3 className="faq__question">{language === 'en' ? 'Question 1?' : 'Question 1?'}</h3>
                        <p className="faq__answer">{language === 'en' ? 'Answer to question 1.' : 'Réponse à la question 1.'}</p>
                      </div>
                      <div className="faq__item">
                        <h3 className="faq__question">{language === 'en' ? 'Question 2?' : 'Question 2?'}</h3>
                        <p className="faq__answer">{language === 'en' ? 'Answer to question 2.' : 'Réponse à la question 2.'}</p>
                      </div>
                      <div className="faq__item">
                        <h3 className="faq__question">{language === 'en' ? 'Question 3?' : 'Question 3?'}</h3>
                        <p className="faq__answer">{language === 'en' ? 'Answer to question 3.' : 'Réponse à la question 3.'}</p>
                      </div>
                    </div>
                  </section>
                </Element>
              </>
            } />
            <Route path="/book" element={<BookingForm />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="/write-review" element={<ReviewForm />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>{language === 'en' ? '© 2023 Summoner School. All rights reserved.' : '© 2023 Summoner School. Tous droits réservés.'}</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
