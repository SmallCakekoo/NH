class CaminosDeMemoriaPassage extends HTMLElement {
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
               <img class="passage-image" src="assets/images/PS10.png" alt="Escena del pasaje">
                <div class="passage-text">
                    La idea no lo dejó en paz.

                    Esa noche, Nilo se sentó frente al fuego con los ojos clavados en las llamas. Las sombras danzaban en las paredes como fragmentos de recuerdos que aún no se dejaban atrapar.

                    —¿Quién fui antes de preguntar?

                    Las palabras le pesaban. No porque fueran tristes, sino porque eran largas, como raíces hundidas en una tierra que no había pisado en años.

                    Al amanecer, antes de que la bruma se levantara, caminó hasta el borde del claro y giró en dirección opuesta. No hacia el corazón del bosque, sino hacia la aldea.

                    Hacía mucho que no volvía a ese sitio.

                    Pasó entre las casas aún dormidas. Nadie lo detuvo. Nadie lo vio.

                    Y allí, detrás de la colina, estaba.

                    La vieja choza donde había vivido con su madre niebla, antes de que la niebla lo llevara lejos, antes de saber que el bosque hablaba.

                    El lugar estaba abandonado. Cubierto de musgo y flores silvestres. Pero dentro. . . algo permanecía.

                    Un cuaderno de hojas secas. Dibujos de árboles con rostros. Notas que no entendía del todo, pero que hablaban de la memoria de las cosas. De cómo algunas semillas nacen recordando.

                    En una de las páginas, un símbolo familiar. Uno que había visto en el claro. Uno que se le había clavado en el pecho como un eco.

                    —Mi madre. . . ¿sabía?

                    Y entonces lo recordó. Una canción. No una letra. Una vibración. Algo que ella cantaba cuando él tenía miedo.

                    "Si escuchás lo que crece, vas a saber quién sos."

                    Nilo salió de la choza con el cuaderno apretado contra el pecho.

                    No tenía todas las respuestas. Pero ahora tenía un mapa.

                    Y el bosque. . . lo estaba esperando.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Llamado Verdadero">Regresar al Claro con nuevas preguntas</button>
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

export default CaminosDeMemoriaPassage;
