class UnRecuerdoFragmentadoPassage extends HTMLElement {
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
                      font-family: Arial, sans-serif;
                  }
  
                  .passage-container {
                      max-width: 800px;
                      margin: 0 auto;
                      text-align: center;
                  }
  
                  .passage-image {
                      width: 100%;
                      max-width: 600px;
                      height: auto;
                      border-radius: 8px;
                      margin-bottom: 20px;
                  }
  
                  .passage-text {
                      font-size: 1.2em;
                      line-height: 1.6;
                      margin-bottom: 30px;
                      white-space: pre-line;
                  }
  
                  .options-container {
                      display: flex;
                      justify-content: center;
                      gap: 20px;
                      margin-top: 20px;
                  }
  
                  .option-button {
                      padding: 10px 20px;
                      font-size: 1em;
                      background-color: #4CAF50;
                      color: white;
                      border: none;
                      border-radius: 4px;
                      cursor: pointer;
                      transition: background-color 0.3s;
                  }
  
                  .option-button:hover {
                      background-color: #45a049;
                  }
              </style>
  
              <div class="passage-container">
                  <img class="passage-image" src="https://picsum.photos/id/237/200/300" alt="Escena del pasaje">
                  <div class="passage-text">
                      Uno de esos días —no sabría decir cuál— Nilo se quedó dormido bajo un árbol dorado del Claro.

                      El viento lo mecía con suavidad, pero en su sueño no encontró paz.

                      Cerró los ojos. Y algo apareció.

                      Una figura lejana, hecha de pétalos y niebla, surgió entre la bruma del sueño.

                      Sus bordes titilaban, como si la memoria que la contenía estuviera incompleta.

                      A veces reía. A veces lloraba. A veces florecía. A veces se apagaba.
                      
                      Nilo quiso acercarse. Quiso hablar. Pero sus pensamientos se deshicieron como rocío al sol.
                  </div>
                  <div class="options-container">
                      <button class="option-button" data-target="Raíz Incierta">Intentar comprender lo que vio</button>
                  </div>
              </div>
          `;
  }

  setupEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll(".option-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        this.dispatchEvent(
          new CustomEvent("passage-change", {
            detail: { target },
            bubbles: true,
            composed: true,
          })
        );
      });
    });
  }
}

export default UnRecuerdoFragmentadoPassage;
