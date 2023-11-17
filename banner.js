class Banner extends HTMLElement {
  static storageKey = "banner--cta-url";

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
    let storageValue = this.getAttribute("key") || this.getAttribute("data-banner-key");
    if(!storageValue) {
      let cta = this.querySelector("a[href]");
      if(cta) {
        storageValue = cta.getAttribute("href");
      }
    }

    let saveType = this.getAttribute("save-type");
    if(storageValue) {
      let store;
      if(saveType === "session") {
        store = sessionStorage;
      } else {
        store = localStorage;
      }

      store.setItem(Banner.storageKey, storageValue);
    }
  }

  close() {
    this.setAttribute("hidden", true);
  }
}

window.customElements.define("announcement-banner", Banner);