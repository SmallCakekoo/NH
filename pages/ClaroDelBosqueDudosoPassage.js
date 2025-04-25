class ClaroDelBosqueDudosoPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS2.png" alt="Escena del pasaje">
                <div class="passage-text">
                    Los árboles del claro se alzaban en un silencio tenso, como si hubieran detenido su respiración apenas lo vieron llegar. Sus troncos, anchos y cubiertos de líquenes, parecían ocultar más de lo que mostraban. No eran signos vivos. Eran cicatrices.

                    Nilo dio un paso, y el suelo mullido no tembló. Se hundió apenas, como si no quisiera sostenerlo.

                    El aire olía a algo estancado, no muerto, pero dormido durante demasiado tiempo. El bosque no lo llamaba. Lo observaba.

                    —¿Sientes eso? —murmuró Luma, esta vez más cerca, casi tocándolo, como si temiera que él se desvaneciera.

                    No había susurros. Solo una sensación. Como si alguien estuviera decidiendo si él debía estar ahí.

                    Y entonces, una voz muy lejana, apenas audible entre los líquenes, dijo:

                    "Vendrá un guardián. . ."

                    Pero se apagó. No terminó la frase.

                    Nilo sintió frío, a pesar del sol filtrado.

                    —¿Crees que. . . se refiere a ti? —preguntó Luma, sin la misma chispa, con una preocupación disimulada.

                    —No lo sé —respondió Nilo, sin excusas, sin chistes. Algo dentro de él se agitaba, pero no sabía si era miedo o vergüenza.

                    El claro no habló más. El silencio no era cálido. Era expectante.

                    Y aun así, algo lo llamaba.

                    Volvieron a la aldea en silencio. Pero esa noche Nilo no durmió.

                    Y al día siguiente, volvió.

                    Y al otro también.

                    Aunque el bosque no lo esperaba.

                    Hasta que un día, lo llamó por su nombre.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Primer Recuerdo">Escuchar los árboles</button>
                    <button class="option-button" data-target="Un Recuerdo Fragmentado">Despertar de golpe</button>
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

export default ClaroDelBosqueDudosoPassage;
