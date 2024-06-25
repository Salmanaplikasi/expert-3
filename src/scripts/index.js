import 'regenerator-runtime';
import '../styles/css/wrapper.css';
import App from './views/app';
import swRegister from './utils/swRegister';
import './components/customNavbar';
import './components/customFooter';
import './components/customHero';
import './components/customFormReview';

const app = new App({
  hamburger: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
