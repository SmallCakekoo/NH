class EnBuscaDeUmbraPassage extends HTMLElement {
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
                    Y así fue como Nilo empezó.
                    No empacó nada. Solo salió de la aldea y caminó, siguiendo donde su corazón le dictaba.

                    El bosque ya no susurraba. Todo era crujir seco y raíces partidas.
                    Los hongos cubrían los troncos como costras vivas, respirando un silencio denso, expectante.

                    Nilo avanzaba con dificultad, rodeado por niebla morada y ramas que parecían cerrarse tras su paso.

                    No había camino. Solo intuición.

                    Los hongos, aliados de Umbra, no hablaban con palabras.
                    Pero se apartaban, uno a uno, reconociendo algo en Nilo.
                    Tal vez su decisión.
                    Tal vez su final.

                    Y entonces lo vio.

                    Allí, entre raíces abiertas como costillas viejas, estaba Umbra.
                    Ya no era solo una semilla.
                    Era más grande, más oscura.
                    Palpitaba como un corazón herido y quieto.

                    Pero no era el monstruo que algunos aldeanos temían.
                    Era solo... olvido.

                    Nilo dio un paso, pero aún dudaba.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Último encuentro">Acercarse</button>
                    <button class="option-button" data-target="El Eco de la Aldea">Huir</button>
                    <button class="option-button" data-target="El Combate de los Recuerdos">Luchar</button>
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

export default EnBuscaDeUmbraPassage;
