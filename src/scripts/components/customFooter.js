class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer tabindex="0">
                <h4>Copyright © 2024 - Mengan Kuy</h4>
            </footer>
        `;
  }
}

customElements.define('custom-footer', CustomFooter);
