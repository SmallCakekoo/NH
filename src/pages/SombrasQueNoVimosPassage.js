class SombrasQueNoVimosPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS13.webp" alt="Escena del pasaje">
                <div class="passage-text">
                    Nilo no volvió, ni siquiera aventó la mirada. El recuerdo temblaba detrás de él como un hilo de luz a punto de apagarse, pero no se atrevió a tocarlo. Algo en su interior gritaba que no estaba listo así que decidió olvidar.

                    En los siguientes días el claro se volvió más callado. Menos claro. Las hojas que antes susurraban ahora parecían guardar silencio. Y aunque Luma siempre estaba a su lado, incluso su voz sonaba lejana.

                    Pasaron días muchos más días.

                    Luego semanas.

                    El bosque ya no murmuraba su nombre.

                    Nilo se lanzó de cabeza a las tareas del día: ayudar en la aldea, limpiar el pozo, llevar mensajes entre ramas. Todo menos pensar. Todo menos volver. Pero en las noches, soñaba con pétalos que no terminaban de abrirse, y con sombras que se estiraban buscando algo perdido.

                    Una tarde, bajo el peso de esa duda que no se nombra, decidió volver al Claro.

                    El lugar lo recibió con una niebla espesa, como si no lo reconociera. O como si lo reconociera demasiado bien.

                    Allí, entre los árboles más antiguos, escuchó por fin una voz. No una que viniera de fuera, sino de muy hondo. Una voz que no preguntaba, que afirmaba:

                    "Hay otra presencia. No como tú, pero cercana. Una raíz sin guía. Un brote olvidado. Su nombre es Umbra."

                    Nilo sintió que el bosque entero le hablaba. Y también, que lo juzgaba con dulzura, Pues a pesar de no estar disponible para atender el bosque se había dedicado a cuidar a su aldea.

                    —¿Por qué ahora? —preguntó en voz baja.

                    "Porque ahora... estás listo para recordar lo que decidiste olvidar y enfrentar a quien le decidiste temer."
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Raíz de Sombra">Seguir la voz de los árboles</button>
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

export default SombrasQueNoVimosPassage;
