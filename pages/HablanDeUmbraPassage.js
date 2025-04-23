class HablanDeUmbraPassage extends HTMLElement {
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
                    Umbra no era un monstruo.
                    No era sombra, ni enemigo.

                    Era una semilla que nunca floreció,
                    retorcida y negra,
                    palpitando de pena bajo tierra húmeda.

                    Cuando Nilo lo vio por primera vez, no lo vio con los ojos.
                    Lo sintió, como se siente el temblor antes del llanto.

                    —No quiero olvidar... —susurró Umbra en el recuerdo que ahora veía Nilo— pero no sé recordar.

                    No fue el miedo lo que brotó en Nilo. Fue compasión.
                    Un dolor ajeno que, de algún modo, también era suyo.

                    Los árboles temblaron. Las ramas se crisparon.
                    Sus voces, antes suaves, ahora eran firmes:

                    "Si lo tocas... te perderás también. Nadie ha logrado ayudarlo."

                    Nilo cerró los ojos. El zumbido en su pecho se convirtió en latido.
                    Sabía que algunas memorias no quieren ser salvadas... pero merecen ser escuchadas.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Encuentro con Umbra">Conocer a Umbra</button>
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

customElements.define("hablan-de-umbra-passage", HablanDeUmbraPassage);
