class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <header>
                <div class="brand-container">
                    <h1 class="brand-container__name" tabindex="0">Mengan Kuy</h1>
                </div>
                <button class="hamburger" id="hamburger" aria-label="button for hamburger menu">☰</button>
                <nav id="drawer" class="nav">
                    <ul class="nav-list">
                        <li class="nav-list__item"><a href="/">Home</a></li>
                        <li class="nav-list__item"><a href="#/favorite">Favorite</a></li>
                        <li class="nav-list__item"><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/salman-abdurohman-958381239/">About Us</a></li>
                    </ul>
                </nav>
            </header>
        `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
