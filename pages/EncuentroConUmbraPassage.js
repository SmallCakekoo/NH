class EncuentroConUmbraPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS12.png" alt="Escena del pasaje">
                <div class="passage-text">
                    La noticia llegó con la bruma.
                    Nilo regresó a la aldea y se subió a la piedra del centro de la plaza, justo donde a veces los ancianos contaban historias antiguas. Pero hoy no traía cuentos. Traía advertencias.

                    —El Claro se está marchitando... —dijo con voz temblorosa—. Las raíces se están secando, y la niebla ya no es memoria: es olvido. Si no hacemos algo, el bosque entero lo va a sentir. Incluida nuestra aldea.

                    El murmullo de los habitantes fue inmediato, como un viento inquieto:

                    —¿Cómo puedes saber eso? ¡Eres solo una gota! —dijo un viejo hongo desde el borde de la plaza.
                    —Quizás solo es parte del ciclo. El bosque siempre cambia —murmuró una semilla anciana, mirando al cielo.
                    —¿Y si está diciendo la verdad? ¡¿Y si el olvido se extiende?! —gritó un joven espino, más asustado que convencido.
                    —¡Entonces que vaya él! Si el Claro lo eligió, que él lo arregle —soltó una voz entre la multitud, con tono entre cínico y resignado.

                    Nilo apretó los puños. No buscaba gloria, ni culpa. Solo quería que escucharan. Pero una a una, las figuras se dispersaron como niebla al viento, con más dudas que respuestas.

                    Todos se fueron.
                    Todos, menos una.

                    Luma seguía ahí. No necesitó entender todo.
                    Solo vio el rostro de Nilo, y supo que no podía dejarlo ir solo.

                    —Si tú crees que se puede... entonces vamos a intentarlo. —dijo, acercándose sin miedo.

                    Y así, bajo un cielo sin estrellas, Nilo durmió por última vez entre la hierba del Claro.
                    La niebla lo envolvía como una despedida suave.

                    Al día siguiente, solo quedaría una elección de no retorno.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Deterioro en la aldea">Buscar respuestas</button>
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

export default EncuentroConUmbraPassage;
