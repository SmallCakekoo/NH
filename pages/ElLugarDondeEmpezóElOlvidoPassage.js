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
                    background-color: #011330;
                    color: #00ecd6;
                    padding: 20px;
                    border: 4px solid #07c0d5;
                    border-image: repeating-linear-gradient(
                        45deg,
                        #07c0d5,
                        #07c0d5 10px,
                        #00ecd6 10px,
                        #00ecd6 20px
                    ) 4;
                    box-shadow: 
                        0 0 0 4px #011330,
                        0 0 0 8px #07c0d5;
                    position: relative;
                }

                .passage-text::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 236, 214, 0.1) 2px,
                        rgba(0, 236, 214, 0.1) 4px
                    );
                    pointer-events: none;
                }

                .option-button {
                    padding: 15px 30px;
                    font-size: 1.4em;
                    background-image: url('assets/images/FondoBTN.png');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-color: #011330;
                    color: #00ecd6;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    font-family: var(--font-buttons);
                    text-shadow: 0 0 5px #07c0d5;
                    box-shadow: 
                        inset 0 0 10px rgba(0, 236, 214, 0.3),
                        0 0 10px rgba(0, 236, 214, 0.3);
                    outline: none;
                    min-width: 250px;
                    animation: pulse 2s infinite;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .option-button:hover {
                    transform: scale(1.05);
                    box-shadow: 
                        inset 0 0 20px rgba(0, 236, 214, 0.5),
                        0 0 30px rgba(0, 236, 214, 0.5);
                }

                .option-button:active {
                    transform: scale(0.98);
                }

                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 
                            inset 0 0 10px rgba(0, 236, 214, 0.3),
                            0 0 10px rgba(0, 236, 214, 0.3);
                    }
                    50% {
                        box-shadow: 
                            inset 0 0 15px rgba(0, 236, 214, 0.5),
                            0 0 20px rgba(0, 236, 214, 0.5);
                    }
                }

                .options-container {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 30px;
                }
            </style>

            <div class="passage-container">
               <img class="passage-image" src="assets/images/PS29.png" alt="Escena del pasaje">
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
