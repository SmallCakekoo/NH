class FinPassage extends HTMLElement {
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
        
        .fin-container {
          max-width: 800px;
          margin: 0 auto;
          background-color: #fff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        
        h1 {
          font-size: 2.5em;
          margin-bottom: 20px;
          color: #2c3e50;
        }
        
        .fin-image {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        
        .message {
          font-size: 1.2em;
          line-height: 1.6;
          margin-bottom: 30px;
        }
        
        .restart-button {
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
        
        .restart-button:hover {
          background-color: #1a252f;
          transform: translateY(-3px);
          box-shadow: 0 6px 10px rgba(0, 0, 0, 0.1);
        }
      </style>
      
      <div class="fin-container">
        <h1>Fin del Viaje</h1>
        
        <img class="fin-image" src="https://picsum.photos/id/15/800/400" alt="Bosque tranquilo">
        
        <div class="message">
          <p>Gracias por acompañar a Nilo y Luma en esta aventura a través de Aqua Anima.</p>
          <p>Tu viaje ha llegado a su fin, pero las historias del bosque continuarán para siempre.</p>
          <p>¿Te gustaría volver al inicio y explorar otros caminos?</p>
        </div>
        
        <button class="restart-button" data-target="main-page">Volver al Inicio</button>
      </div>
    `;
  }

  setupEventListeners() {
    const restartButton = this.shadowRoot.querySelector(".restart-button");
    if (restartButton) {
      restartButton.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }
}

export default FinPassage;
