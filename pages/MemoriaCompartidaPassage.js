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
