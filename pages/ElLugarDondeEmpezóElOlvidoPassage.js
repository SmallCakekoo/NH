class ElLugarDondeEmpezóElOlvidoPassage extends HTMLElement {
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
                    El bosque marchito no era oscuro.
                    Era gris.

                    El tipo de gris que no es sombra ni luz, sino una pausa infinita entre ambas. Las hojas crujían como papel seco, y los árboles ya no tenían memoria. Solo costras de lo que alguna vez fue savia.

                    Nilo avanzó, y con cada paso, el aire se volvía más espeso. Como si el olvido tuviera peso.

                    Entonces lo vio.

                    Umbra.

                    No al acecho. No furioso.
                    Solo... de pie.

                    Ya no era solo una figura de sombra. Había rasgos. Rastros de algo que alguna vez fue tierno. Un brote. Una esperanza.

                    —No puedes detenerme —murmuró Umbra, sin moverse—. No estoy aquí para ser salvado.

                    Nilo se acercó. No para convencerlo, sino para entenderlo.

                    —No vengo a salvarte. Vengo a recordarte.

                    La frase quedó suspendida como una gota a punto de caer.
                    Umbra tembló. No de miedo. De duda.

                    —¿Por qué? —preguntó. Y por un instante, su voz no era de sombra. Era de alguien que también había sido niño alguna vez.

                    Nilo sacó la corteza que había tallado la noche anterior.
                    Se la mostró. Un simple círculo.

                    —Porque fuiste parte de esto. Porque sigues siéndolo. Porque antes del olvido, hubo un juego. Un canto. Una risa. ¿Lo recuerdas? Yo estuve ahí... hasta que te fuiste.

                    Umbra alzó la mano. Dudó. Y entonces, vio.

                    No un recuerdo. Un sentimiento.
                    El calor del sol en una raíz joven.
                    La brisa que nombraba cosas sin enseñarlas.
                    Una risa. Una gota. Un nombre que había enterrado: el suyo.

                    Y lloró.

                    No con lágrimas. Con grietas.

                    El bosque respondió.
                    Una hoja cayó. Verde.
                    Solo una.

                    Pero suficiente.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Memoria Compartida">Recordarle quién fue</button>
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

export default ElLugarDondeEmpezóElOlvidoPassage;
