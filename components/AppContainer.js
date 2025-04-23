import StoryService from "../services/storyService.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.currentPassage = "main-page";
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: Arial, sans-serif;
        }
        
        .story-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
      </style>
      
      <div class="story-container">
        <${this.currentPassage}></${this.currentPassage}>
      </div>
    `;
  }

  setupEventListeners() {
    this.addEventListener("passage-change", (event) => {
      this.navigateToPassage(event.detail.target);
    });
  }

  navigateToPassage(target) {
    // Si el target es FIN, navegar a la página de fin
    if (target === "FIN") {
      this.currentPassage = "fin-passage";
    } else {
      // Convertir el nombre legible a un formato válido para elementos HTML
      const targetElement = this.formatPassageName(target);
      this.currentPassage = targetElement;
    }
    this.render();
  }

  formatPassageName(name) {
    // Convertir espacios, quitar acentos y convertir a minúsculas
    return (
      name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-") + "-passage"
    );
  }
}

export default AppContainer;
