class RaízCompartidaPassage extends HTMLElement {
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
                    El símbolo brillaba entre ellos, vibrando como un corazón que aún quiere creer.

                    Umbra temblaba. Por primera vez, no por rabia... sino por algo más parecido al miedo.

                    —No sé si puedo ser otra cosa —dijo con voz apenas audible.

                    —No tienes que ser lo de antes —respondió Nilo, con suavidad—. Solo... no ser lo que el olvido te obligó a ser.

                    La sombra titubeó.

                    Y luego, como una raíz que se niega a romperse, se dobló... pero no cayó.

                    El bosque no aplaudió. No hubo sol. No hubo milagro.

                    Solo una pequeña flor.

                    Nació entre los pies de ambos. Tenía pétalos oscuros y un centro brillante. Era rara. Torcida. Ningún botánico la entendería.

                    Pero estaba viva.

                    Umbra se sentó junto a Nilo. No dijo nada más.

                    Y Nilo, por primera vez en mucho tiempo, sonrió.

                    Tal vez el bosque aún estaba herido. Tal vez habría que reconstruirlo rama por rama, recuerdo por recuerdo.

                    Pero no estarían solos.

                    La sombra y el olvido ya no reinaban.

                    Ahora... acompañaban.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="FIN">FIN</button>
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

customElements.define("raíz-compartida-passage", RaízCompartidaPassage);
