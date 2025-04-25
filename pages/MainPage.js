class MainPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          background-image: url('assets/images/Portada.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          min-height: 100%;
        }

        .subtitle {
          font-size: 1.2em;
          text-align: center;
          font-style: italic;
          margin-bottom: 30px;
          color: #7f8c8d;
        }
        
        .button-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 85vh;
        }
        
        .start-button, .characters-button {
          display: block;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: none;
          padding: 0;
        }
        
        .start-button {
          width: min(200px, 80%);
        }
        
        .characters-button {
          width: min(220px, 80%);
        }
        
        @media screen and (max-width: 768px) {
          .button-container {
            margin-top: 65vh;
          }
          
          .start-button {
            width: min(150px, 60%);
          }
          
          .characters-button {
            width: min(150px, 60%);
          }
        }
        
        @media screen and (max-width: 480px) {
          .button-container {
            margin-top: 60vh;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          
          .start-button {
            width: min(120px, 50%);
          }
          
          .characters-button {
            width: min(120px, 50%);
          }
        }
        
        .start-button:hover, .characters-button:hover {
          transform: scale(1.05);
          filter: brightness(1.3) drop-shadow(0 0 10px rgba(0, 123, 255, 0.8));
          transition: all 0.3s ease;
        }
      </style>
      
      <div class="main-container">
        <div class="button-container">
          <button class="start-button" data-target="Inicio">
            <img src="assets/images/Comenzar.png" alt="Comenzar Historia" style="width: 100%; height: auto;">
          </button>
          <button class="characters-button" data-target="Personajes">
            <img src="assets/images/Personajes.png" alt="Ver Personajes" style="width: 100%; height: auto;">
          </button>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    const startButton = this.shadowRoot.querySelector(".start-button");
    if (startButton) {
      startButton.addEventListener("click", () => {
        const target = startButton.getAttribute("data-target");
        this.dispatchEvent(
          new CustomEvent("passage-change", {
            detail: { target },
            bubbles: true,
            composed: true,
          })
        );
      });
    }

    const charactersButton =
      this.shadowRoot.querySelector(".characters-button");
    if (charactersButton) {
      charactersButton.addEventListener("click", () => {
        const target = charactersButton.getAttribute("data-target");
        this.dispatchEvent(
          new CustomEvent("passage-change", {
            detail: { target },
            bubbles: true,
            composed: true,
          })
        );
      });
    }
  }
}

export default MainPage;
