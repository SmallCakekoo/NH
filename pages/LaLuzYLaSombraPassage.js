class LaLuzYLaSombraPassage extends HTMLElement {
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
                    La pelea no era justa.

                    Nilo estaba cansado, herido, cubierto de barro y pétalos rotos. Umbra parecía no agotarse nunca.

                    —Tú no entiendes —susurró Umbra—. Esto es más grande que tú.

                    —Tal vez —dijo Nilo, temblando—. Pero yo sí recuerdo quién eras.

                    Eso bastó para romper algo.

                    Un destello.

                    Una chispa.

                    Por un segundo, Umbra dudó. Y esa grieta en su oscuridad fue todo lo que Nilo necesitó.

                    Corrió, con un símbolo en mano, y lo presionó contra el pecho de Umbra.

                    No para herirlo... sino para recordarlo.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El Reino del Olvido">La flor que no brotó</button>
                    <button class="option-button" data-target="Raíz Compartida">La raíz que no se rompió</button>
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

export default LaLuzYLaSombraPassage;
