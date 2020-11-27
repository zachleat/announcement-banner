// Inline this into your <head>

// The current banner CTA URL, we inject this from a JSON data file
let ctaUrl = "https://www.netlify.com/sustainability/";
let savedCtaUrl = localStorage.getItem("banner--cta-url");

if(savedCtaUrl === ctaUrl) {
  document.documentElement.classList.add("banner--hide");
}