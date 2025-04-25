class ElBroteQueEligioReirPassage extends HTMLElement {
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
                    background-image: url('assets/images/FondoBTN.webp');
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
                <img class="passage-image" src="assets/images/PS24.webp" alt="Escena del pasaje">
                <div class="passage-text">
                    Esa noche, bajo la luna en espiral, Umbra dejó de florecer por un rato.

                    Estaba sentado junto a Nilo, en la colina detrás de la aldea, donde el musgo contaba secretos y las piedras parecían saber escuchar.

                    —No sé quién fui antes —dijo Umbra, mirando una luciérnaga que se enredaba en sus ramas—. Pero me gusta esto. Ser... raro. Reírme. Florecer sin permiso.

                    Nilo sonrió, apoyando su cuaderno sobre las rodillas.

                    —No necesitas recordar para empezar. Puedes inventarte.

                    Sacó un pequeño objeto: un símbolo nuevo, hecho con ramitas entrelazadas, una flor y un hilo rojo.

                    —Este no es un recuerdo. Es una posibilidad. Un "quién podrías ser".

                    Umbra lo tomó con cuidado. Lo sostuvo como si pesara lo mismo que una estrella.

                    —Entonces... ¿ya no soy "el brote torcido"? ¿Ni "el niño hongo"? ¿Ni "el que florece por los pies"?

                    —Solo si tú quieres.

                    Umbra pensó un momento. Sus ojos, aún sin forma exacta, brillaron con algo que parecía decisión. O travesura.

                    —Quiero llamarme... Floronio Destructor del Olvido.

                    Nilo parpadeó. Una vez. Dos veces.

                    —¿Eso es serio?

                    —¡Claro que no! Pero suena épico, ¿no?

                    Y floreció. Con tanta fuerza que a Nilo le salieron pétalos del bolsillo.

                    —Está bien —rió Nilo—. Pero para mí... sigues siendo Umbra. Uno nuevo. Uno distinto.

                    La criatura asintió. Y por primera vez, floreció en silencio. No por accidente. Sino porque así lo eligió.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El Claro de las Risas">Un final nuevo</button>
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

export default ElBroteQueEligioReirPassage;
