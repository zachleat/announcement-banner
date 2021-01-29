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
    let storageKey = this.getAttribute("data-banner-key");
    if(!storageKey) {
      let cta = this.querySelector("a[href]");
      if(cta) {
        storageKey = cta.getAttribute("href");
      }
    }

    if(storageKey) {
      localStorage.setItem("banner--cta-url", storageKey);
    }
  }

  close() {
    this.setAttribute("hidden", true);
  }
}

window.customElements.define("announcement-banner", Banner);