class MemoriaCompartidaPassage extends HTMLElement {
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
               <img class="passage-image" src="assets/images/PS30.png" alt="Escena del pasaje">
                <div class="passage-text">
                    No hubo trueno.
                    Ni explosión.
                    Solo silencio.

                    Un silencio tan profundo que se volvió semilla.

                    Umbra cerró los ojos.
                    Y por primera vez... no vio oscuridad.

                    Vio un campo abierto.
                    Vio la semilla que había sido.
                    El canto que olvidó.
                    El juego que nunca terminó, solo se deshizo en el viento.

                    Nilo no dijo nada. Solo se sentó a su lado, como quien entiende que hay batallas que no se ganan con fuerza, sino con presencia.

                    La corteza tallada descansaba entre ellos.
                    Y de ella brotaba una luz suave, como si los recuerdos no fueran imágenes, sino raíces reconectando.

                    Umbra junto a Nilo la tocó.

                    Y entonces, sucedió.

                    Los árboles cercanos parpadearon.
                    No con hojas. Con memoria.
                    Historias enterradas regresaron a las cortezas.
                    Risas. Juegos. Tormentas y reconciliaciones.
                    Lo perdido ya no dolía: enseñaba.

                    El gris se volvió niebla.
                    La niebla, rocío.
                    Y en medio de todo, una flor pequeña, blanca y temblorosa, nació donde antes no había nada.

                    Umbra la miró. Y sonrió.

                    Solo un poco.

                    Nilo, agotado, recostó su espalda en un tronco tibio.
                    No sabía si habían vencido.
                    Pero sabían algo mejor:

                    Que recordar también es resistir.

                    Y cuando la noche cayó, no fue un final.
                    Fue una pausa.

                    Una que el bosque sabría llenar cuando volviera a cantar.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Un nuevo brote">Epílogo</button>
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

export default MemoriaCompartidaPassage;
