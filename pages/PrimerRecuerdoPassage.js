class PrimerRecuerdoPassage extends HTMLElement {
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
                    Uno de esos días —no sabría decir cuál— Nilo se quedó dormido bajo un árbol dorado del Claro, cuyas hojas caían tan lento que parecía que el tiempo mismo olvidaba pasar.

                    La brisa susurraba cosas que no entendía, y el sol filtrado entre las ramas pintaba figuras en el suelo. Cerró los ojos solo un segundo.

                    Y entonces, lo vio.

                    No con los ojos. Con el alma.

                    Era un recuerdo.

                    Una mujer de pétalos caminaba entre risas, ligera como el viento que no pide permiso. Sus pasos no hacían ruido, pero el bosque florecía a su paso. No la conocía, y sin embargo... la sentía familiar, como si la hubiera soñado de niño, o como si su risa hubiera quedado atrapada en alguna hoja que ahora se deshacía.

                    El aire cambió. Los árboles vibraron con una calma que solo los siglos saben tener.

                    "Tú ves porque has sido elegido," susurraron, no con voz, sino con certeza.

                    Nilo se incorporó lentamente, el corazón lleno de algo que no sabía nombrar. No miedo. No alegría. Algo más vasto. Como si una puerta se hubiera abierto adentro.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Vínculo con el Claro">Aceptar la conexión</button>
                    <button class="option-button" data-target="Eco Irreal">Dudar del recuerdo</button>
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

customElements.define("primer-recuerdo-passage", PrimerRecuerdoPassage);
