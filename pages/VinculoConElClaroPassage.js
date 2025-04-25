class VinculoConElClaroPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS7.webp" alt="Escena del pasaje">
                <div class="passage-text">
                    Con cada visita, el Claro parecía menos un lugar y más una presencia. Los árboles ya no solo susurraban... a veces, parecía que esperaban a Nilo.

                    Pero entonces, algo cambió.

                    El brillo suave que flotaba entre las ramas comenzó a apagarse. Las hojas, antes doradas, caían sin viento. Y aunque no era otoño, el suelo se cubría de ausencias.

                    Una mañana, el aire llegó más denso. Al tocar el tronco del árbol dorado, Nilo sintió un escalofrío. Un murmullo recorrió el bosque como una brisa enferma:

                    "Umbra..."

                    El nombre no sonaba como un aviso. Sonaba como un recuerdo que dolía.

                    —¿Quién es Umbra? —preguntó en voz alta, aunque sabía que el bosque rara vez respondía con claridad.

                    Pero esa vez, lo hizo.

                    Los ancianos árboles hablaron. Sus voces eran lentas, como raíces moviéndose bajo tierra.

                    "Umbra fue uno de nosotros. Un guardián de memoria."

                    "Pero nunca germinó del todo. Era solo una semilla... a la que nunca le dio el sol."

                    "Mientras otros crecíamos al calor del recuerdo, él quedó en la sombra. Olvidado antes de florecer."

                    "Desde entonces, se alimenta del olvido. Y lo que no se nombra... lo convierte en sombra."

                    Nilo sintió que algo se apretaba dentro de sí. No era miedo. Era algo más viejo. Más profundo. Como si una parte de él ya supiera esta historia… pero la hubiera olvidado.

                    El zumbido en su pecho seguía allí, más fuerte.

                    Ya no era una pregunta.

                    Era un llamado.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Hablan de Umbra">Investigar lo que ocurre</button>
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

export default VinculoConElClaroPassage;
