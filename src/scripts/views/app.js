import DrawerInitiator from '../utils/drawerInitiator';
import UrlParser from '../routes/urlParser';
import Routes from '../routes/routes';

class App {
  constructor({ hamburger, drawer, main }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._main = main;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      main: this._main,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = Routes[url];
    this._main.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
