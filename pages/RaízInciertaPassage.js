class RaízInciertaPassage extends HTMLElement {
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
               <img class="passage-image" src="assets/images/PS7.png" alt="Escena del pasaje">
                <div class="passage-text">
                    Al día siguiente, Nilo volvió al claro.

                    No había dormido bien. El recuerdo —o el sueño— seguía aferrado a su mente como una espina suave, que no dolía pero no lo dejaba en paz.

                    El árbol bajo el que se había quedado dormido seguía allí, dorado y silencioso. Pero algo había cambiado. No en el árbol. En él.

                    Se sentó con las piernas cruzadas, como había visto hacer a los sabios de la aldea. Cerró los ojos. Respiró lento.

                    —¿Qué quieres mostrarme? —susurró.

                    Nada.

                    El viento pasó, ignorante. Las hojas cayeron sin apuro. Y sin embargo… había algo. Un murmullo apenas audible. Como si el claro susurrara, pero no a él.

                    "Recuerda. . . quién fuiste antes de preguntar. . ."

                    Nilo abrió los ojos de golpe. ¿Antes de qué? ¿Qué quería decir eso?

                    —¿Antes de preguntar? ¿Qué significa? —dijo en voz alta, esta vez sin temor a romper el silencio.

                    Luma apareció entre la niebla, como si la hubiera llamado con el pensamiento.

                    —¿Otra vez hablando solo?

                    —No estoy solo —respondió Nilo, más seguro de lo que esperaba—. Solo que el bosque. . . aún no está seguro de que yo sea yo.

                    Luma se sentó a su lado. No dijo nada por un rato. Luego, con la voz más tranquila que nunca:

                    —Entonces tal vez no tienes que convencer al bosque. Tienes que recordarte a ti.

                    Nilo la miró. Y por primera vez, pensó que quizá la respuesta no estaba en los árboles. Sino en sus raíces.

                    Las suyas.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Caminos de Memoria">Buscar en su historia</button>
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

export default RaízInciertaPassage;
