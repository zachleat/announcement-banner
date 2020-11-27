class Banner extends HTMLElement {
  connectedCallback() {
    // No matter when this runs, the close button will not be visible
    // until after this class is added—prevents ghost clicks on the button
    // before the event listener is added.
    this.classList.add("banner--show-close");

    let button = this.getButton();
    if(button) {
      button.addEventListener("click", () => {
        this.savePreference();
        this.close();
      });
    }
  }

  getButton() {
    return this.querySelector("[data-banner-close]");
  }

  savePreference() {
    let cta = this.querySelector("a[href]");
    if(cta) {
      let ctaUrl = cta.getAttribute("href");
      localStorage.setItem("banner--cta-url", ctaUrl);
    }
  }

  close() {
    this.setAttribute("hidden", true);
  }
}

window.customElements.define("announcement-banner", Banner);