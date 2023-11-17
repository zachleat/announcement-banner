class Banner extends HTMLElement {
  connectedCallback() {
    let button = this.querySelector("[data-banner-close]");
    if(button) {
      button.addEventListener("click", () => {
        this.savePreference();
        this.close();
      });
    }
  }

  savePreference() {
    let storageKey = this.getAttribute("data-banner-key");
    if(!storageKey) {
      let cta = this.querySelector("a[href]");
      if(cta) {
        storageKey = cta.getAttribute("href");
      }
    }

    let saveType = this.getAttribute("save-type");
    if(storageKey) {
      let store;
      if(saveType === "session") {
        store = sessionStorage;
      } else {
        store = localStorage;
      }

      store.setItem("banner--cta-url", storageKey);
    }
  }

  close() {
    this.setAttribute("hidden", true);
  }
}

window.customElements.define("announcement-banner", Banner);