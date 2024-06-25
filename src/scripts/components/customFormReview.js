class CustomFormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="form-review">
                <div class="review-form-container">
                    <form autocomplete="on" class="review-form">
                        <div class="form-group">
                            <label for="input-name" class="form-label">Name</label>
                            <input type="text" class="form-input" id="input-name" minlength="3" placeholder="Your name..." required>
                        </div>

                        <div class="form-group">
                            <label for="input-review" class="form-label">Review</label>
                            <input type="text" class="form-input" id="input-review" minlength="3" placeholder="Your review..." required>
                        </div>

                        <button id="btn-submit-review" type="submit" class="btn-submit">Submit Review</button>
                    </form>
                </div>
            </div>
        `;
  }
}

customElements.define('custom-form-review', CustomFormReview);
