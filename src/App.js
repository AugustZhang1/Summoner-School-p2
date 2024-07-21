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
                        <div className="review__username">Joe</div>
                        <div className="review__text">{language === 'en' ? 'Amazing' : 'Leur avis'}</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Bob</div>
                        <div className="review__text">{language === 'en' ? 'I went 0 - 20 but i had 10cs per min' : 'Je suis allé de 0 à 20 mais j avais 10cs par minute'}</div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="review__header">
                        <div className="review__rating">⭐⭐⭐⭐⭐</div>
                        <div className="review__date">00/00/0000</div>
                      </div>
                      <div className="review__content">
                        <div className="review__username">Videofun8</div>
                        <div className="review__text">{language === 'en' ? 'Still hardstuck Iron 4' : 'Iron 4 toujours bloqué'}</div>
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
                          <p className="coach__description">{language === 'en' ? 'Hello I am Faker and I main Midlane I will teach you how to become a 4 time world champion just like me' : "Bonjour, je suis Faker et je suis Midlane principal. Je vais vous apprendre à devenir 4 fois champion du monde tout comme moi.."}</p>
                          <Link to="/book" className="button--primary">{language === 'en' ? 'Book Now' : 'Réservez maintenant'}</Link>
                        </div>
                      </div>
                      <div className="coach">
                        <img src={coachImage2} alt="Coach 2" className="coach__image" />
                        <div className="coach__details">
                          <h3 className="coach__name">Tyler1</h3>
                          <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                          <p className="coach__description">{language === 'en' ? 'Hello I am Tyler1 and I have hit challenger in a 5 lanes, I will coach on how to do the same!' : "Bonjour, je m'appelle Tyler1 et j'ai frappé un challenger dans un 5 voies, je vais vous coacher sur la façon de faire de même !"}</p>
                          <Link to="/book" className="button--primary">{language === 'en' ? 'Book Now' : 'Réservez maintenant'}</Link>
                        </div>
                      </div>
                      <div className="coach">
                        <img src={coachImage3} alt="Coach 3" className="coach__image" />
                        <div className="coach__details">
                          <h3 className="coach__name">ThebausFFS</h3>
                          <div className="coach__rating">⭐⭐⭐⭐⭐</div>
                          <p className="coach__description">{language === 'en' ? 'Hello I am the Bausffs and the creator of the Baussian Law, I will show you how to minize deaths during laneing phase ' : "Bonjour je suis les Bausff et le créateur de la loi Baussienne, je vais vous montrer comment minimiser les décès pendant la phase de laneing"}</p>
                          <Link to="/book" className="button--primary">{language === 'en' ? 'Book Now' : 'Réservez maintenant'}</Link>
                        </div>
                      </div>
                    </div>
                    <Link to="/book" className="button--secondary">{language === 'en' ? 'View All Coaches' : 'Voir tous les entraîneurs'}</Link>
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
                    <div className="faq__contact">
                      <h3>{language === 'en' ? 'Contact Us' : 'Contactez-nous'}</h3>
                      <p>{language === 'en' ? 'Telephone: (123) 456-7890' : 'Téléphone: (123) 456-7890'}</p>
                      <p>{language === 'en' ? 'Email: info@summonerschool.com' : 'Email: info@summonerschool.com'}</p>
                    </div>
                    <div className="faq__content">
                      <h3>{language === 'en' ? 'Q: What is Summoner School?' : 'Q: Qu\'est-ce que Summoner School ?'}</h3>
                      <p>{language === 'en' ? 'A: Summoner School is a coaching service for League of Legends players looking to improve their skills and climb the ranks.' : 'R: Summoner School est un service de coaching pour les joueurs de League of Legends cherchant à améliorer leurs compétences et à gravir les échelons.'}</p>
                      <h3>{language === 'en' ? 'Q: How do I book a coaching session?' : 'Q: Comment réserver une séance de coaching ?'}</h3>
                      <p>{language === 'en' ? 'A: You can book a session by clicking on the "Book Now" button next to the coach of your choice and following the instructions.' : 'R: Vous pouvez réserver une séance en cliquant sur le bouton "Réservez maintenant" à côté de l\'entraîneur de votre choix et en suivant les instructions.'}</p>
                      <h3>{language === 'en' ? 'Q: What are the rates for coaching?' : 'Q: Quels sont les tarifs pour le coaching ?'}</h3>
                      <p>{language === 'en' ? 'A: Rates vary by coach and are listed next to each coach\'s profile.' : 'R: Les tarifs varient selon l\'entraîneur et sont indiqués à côté du profil de chaque entraîneur.'}</p>
                      <h3>{language === 'en' ? 'Q: Can I get a refund if I\'m not satisfied?' : 'Q: Puis-je obtenir un remboursement si je ne suis pas satisfait ?'}</h3>
                      <p>{language === 'en' ? 'A: Yes, we offer a satisfaction guarantee. If you\'re not happy with your coaching session, please contact us for a refund.' : 'R: Oui, nous offrons une garantie de satisfaction. Si vous n\'êtes pas satisfait de votre séance de coaching, veuillez nous contacter pour un remboursement.'}</p>
                      <h3>{language === 'en' ? 'Q: Do you offer group coaching sessions?' : 'Q: Offrez-vous des séances de coaching de groupe ?'}</h3>
                      <p>{language === 'en' ? 'A: Yes, we offer both individual and group coaching sessions. Please contact us for more details.' : 'R: Oui, nous offrons des séances de coaching individuelles et de groupe. Veuillez nous contacter pour plus de détails.'}</p>
                      <h3>{language === 'en' ? 'Q: How do I prepare for my coaching session?' : 'Q: Comment puis-je me préparer pour ma séance de coaching ?'}</h3>
                      <p>{language === 'en' ? 'A: Make sure to have a stable internet connection, a working microphone, and be ready to share your gameplay replays with your coach.' : 'R: Assurez-vous d\'avoir une connexion Internet stable, un microphone fonctionnel et soyez prêt à partager vos replays de gameplay avec votre entraîneur.'}</p>
                      <h3>{language === 'en' ? 'Q: What can I expect from a coaching session?' : 'Q: Que puis-je attendre d\'une séance de coaching ?'}</h3>
                      <p>{language === 'en' ? 'A: You can expect personalized feedback, strategic insights, and professional guidance tailored to your gameplay.' : 'R: Vous pouvez vous attendre à des retours personnalisés, des idées stratégiques et des conseils professionnels adaptés à votre gameplay.'}</p>
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
