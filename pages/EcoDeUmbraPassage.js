class EcoDeUmbraPassage extends HTMLElement {
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
                    Volver al lugar donde lo vio por primera vez fue como entrar a una herida abierta del bosque.
                    Todo estaba marchito. No muerto. Peor: olvidado.
                    Las hojas no crujían, los aromas no existían. El tiempo allí no pasaba... o no llegaba.

                    Nilo caminó entre ramas secas, musgo gris, y raíces que ya no sabían a dónde ir.
                    El aire tenía un peso que no era físico.

                    Y entonces, un murmullo.

                    No palabras. No viento.

                    Un eco.

                    Como si alguien respirara recuerdos.

                    Nilo avanzó sin miedo. Ya no podía fingir que no lo había visto. Ya no podía hacer como si no lo sintiera.
                    Y allí estaba.

                    Umbra.
                    No en forma completa. No del todo. Una silueta difusa entre lo que fue y lo que quiso ser.

                    —No vine a pelear —dijo Nilo, su voz temblando solo un poco.

                    Umbra no respondió, pero su sombra tembló, como si dudara entre alzarse o apagarse.

                    —Quiero entender. Solo eso.

                    Un destello atravesó la figura.
                    Imágenes sin orden: risas, fuego, pétalos cayendo, una lluvia negra, un árbol llorando savia oscura.

                    Y una sensación: abandono.

                    Umbra se desvaneció con un suspiro que no era aire, sino memoria escapando.

                    Pero Nilo ya había recibido lo necesario.

                    Una promesa muda quedó entre los troncos secos.

                    "Nos volveremos a ver… cuando estés listo para recordarlo todo."
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Antes del Alba">Prepararse para el reencuentro final</button>
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

customElements.define("eco-de-umbra-passage", EcoDeUmbraPassage);
