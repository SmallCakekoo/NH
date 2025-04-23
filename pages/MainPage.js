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
          font-family: 'Georgia', serif;
          color: #333;
          background-color: #f5f5f5;
          padding: 20px;
        }
        
        .main-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        h1 {
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }
        
        .subtitle {
          font-size: 1.2em;
          text-align: center;
          font-style: italic;
          margin-bottom: 30px;
          color: #7f8c8d;
        }
        
        .story-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        
        .description {
          font-size: 1.1em;
          line-height: 1.6;
          margin-bottom: 30px;
          text-align: justify;
        }
        
        .start-button {
          display: block;
          width: 200px;
          padding: 15px;
          margin: 30px auto 0;
          font-size: 1.2em;
          background-color: #2c3e50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .start-button:hover {
          background-color: #1a252f;
          transform: translateY(-3px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
        }
      </style>
      
      <div class="main-container">
        <h1>Aqua Anima</h1>
        <p class="subtitle">Un viaje entre el recuerdo y el olvido</p>
        
        <img class="story-image" src="https://picsum.photos/id/29/800/400" alt="Bosque misterioso">
        
        <div class="description">
          <p>En un bosque envuelto en magia ancestral, donde los árboles guardan secretos de siglos y las sombras tienen voz propia, una historia espera ser descubierta.</p>
          
          <p>Nilo y Luma, dos pequeños seres del bosque, se adentrarán en un viaje que desafiará todo lo que conocen sobre su mundo. A través de claros luminosos y rincones de oscuridad, descubrirán que la memoria del bosque está en peligro.</p>
          
          <p>Cada elección que tomes moldeará su destino y podría cambiar para siempre el equilibrio entre la luz y la sombra.</p>
          
          <p>¿Estás listo para adentrarte en Aqua Anima?</p>
        </div>
        
        <button class="start-button" data-target="Inicio">Comenzar Historia</button>
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
  }
}

export default MainPage;
