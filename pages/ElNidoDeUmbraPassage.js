class ElNidoDeUmbraPassage extends HTMLElement {
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
                    El borde del bosque seco seguía allí, quieto y callado. Nilo dio un paso, luego otro... y se detuvo. Algo le dijo que aún no era el momento.

                    —Te encontraré. Pero cuando pueda verte sin miedo —susurró, casi como una promesa.

                    Durante los días siguientes, volvió al mismo lugar. A veces solo. A veces con preguntas. Nunca con respuestas. Cada visita era distinta: la niebla cambiaba de forma, el suelo crujía diferente, y un zumbido lo seguía, como si alguien intentara recordarlo. Pero siempre iba a pasar tiempo con umbra hasta que un día desapareció.

                    Nilo nunca perdió la esperanza, así que siguió llendo.

                    Una tarde, entre las ramas muertas, vio un destello. No era luz. Era un ojo. Observándolo. Esperándolo.

                    Nilo tragó saliva y avanzó un paso más.

                    —Estoy aquí. ¿Tú también lo estás?

                    Y el bosque tembló suavemente. Como si dijera que sí.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Sombras Antiguas">Seguir el destello</button>
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

customElements.define("el-nido-de-umbra-passage", ElNidoDeUmbraPassage);
