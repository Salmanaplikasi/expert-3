class CustomHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero-container">
                <h2 class="hero-container__title" tabindex="0">Welcome to Mengan Kuy</h2>
                <p class="hero-container__description" tabindex="0">It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.</p>
                <button class="hero_button" id="scroll_button">Explore Restaurant</button>
            </div>
        `;
  }
}

customElements.define('custom-hero', CustomHero);
