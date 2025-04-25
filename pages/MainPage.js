class MainPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.backgroundLoaded = false;
    this.buttonImagesLoaded = 0;
  }

  connectedCallback() {
    // Primero renderizar un esqueleto básico con fondo temporal
    this.renderSkeleton();

    // Establecer el fondo inmediatamente para evitar página en blanco
    this.shadowRoot.host.style.backgroundImage =
      "url('assets/images/Portada.jpg')";
    this.shadowRoot.host.style.backgroundSize = "contain";
    this.shadowRoot.host.style.backgroundPosition = "center";
    this.shadowRoot.host.style.backgroundRepeat = "no-repeat";

    // Luego cargar los elementos visuales
    this.loadButtonImages();
  }

  renderSkeleton() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          min-height: 100%;
          background-color: #011330;
          transition: background-image 0.5s ease;
        }

        .loading-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #07c0d5;
          font-size: 1.5em;
          text-align: center;
        }
        
        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(7, 192, 213, 0.3);
          border-radius: 50%;
          border-top-color: #07c0d5;
          animation: spin 1s ease-in-out infinite;
          margin: 0 auto 20px;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        .button-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 85vh;
          opacity: 0;
          transition: opacity 0.5s ease-in;
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
      
      <div class="loading-indicator">
        <div class="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
      
      <div class="main-container">
        <div class="button-container">
          <button class="start-button" data-target="Inicio">
            <img src="" alt="Comenzar Historia" style="width: 100%; height: auto;" loading="lazy">
          </button>
          <button class="characters-button" data-target="Personajes">
            <img src="" alt="Ver Personajes" style="width: 100%; height: auto;" loading="lazy">
          </button>
        </div>
      </div>
    `;
  }

  loadButtonImages() {
    const startButtonImg = this.shadowRoot.querySelector(".start-button img");
    const charactersButtonImg = this.shadowRoot.querySelector(
      ".characters-button img"
    );

    if (startButtonImg) {
      startButtonImg.onload = () => {
        this.buttonImagesLoaded++;
        if (this.buttonImagesLoaded === 2) this.hideLoadingIndicator();
      };
      startButtonImg.src = "assets/images/Comenzar.png";
    }

    if (charactersButtonImg) {
      charactersButtonImg.onload = () => {
        this.buttonImagesLoaded++;
        if (this.buttonImagesLoaded === 2) this.hideLoadingIndicator();
      };
      charactersButtonImg.src = "assets/images/Personajes.png";
    }

    // Por si alguna imagen falla, asegurarse de ocultar el indicador después de un tiempo
    setTimeout(() => {
      if (this.shadowRoot.querySelector(".loading-indicator")) {
        this.hideLoadingIndicator();
      }
    }, 3000);
  }

  hideLoadingIndicator() {
    // Ocultar indicador de carga
    const loadingIndicator =
      this.shadowRoot.querySelector(".loading-indicator");
    if (loadingIndicator) {
      loadingIndicator.style.display = "none";
    }

    // Mostrar botones
    const buttonContainer = this.shadowRoot.querySelector(".button-container");
    if (buttonContainer) {
      buttonContainer.style.opacity = "1";
    }

    // Configurar los event listeners después de que todo esté cargado
    this.setupEventListeners();
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
