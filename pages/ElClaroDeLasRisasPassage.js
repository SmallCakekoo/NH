class ElClaroDeLasRisasPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS31.png" alt="Escena del pasaje">
                <div class="passage-text">
                    No todos entran al Claro.

                    Pero esa mañana, el bosque pareció abrirle paso a Nilo, a Luma... y a Umbra.

                    El suelo crujía distinto. Las raíces se movían suavemente, como si estuvieran despeinando la tierra solo para hacerles cosquillas al pasar.

                    Umbra iba al frente, con su símbolo nuevo colgando del cuello y una flor que giraba como hélice sobre su cabeza.

                    —¿Estás seguro de esto? —preguntó Luma, mientras esquivaba una enredadera que parecía querer abrazarla.

                    —No —dijo Nilo, como siempre últimamente—. Pero el Claro sí lo está.

                    El lugar brillaba. No con luz normal. Con luz de risa, de juego, de cosas que no deberían existir pero existen igual. Como un hongo que contaba chistes malos. O una piedra que se carcajeaba si le hacías cosquillas.

                    Umbra se detuvo en el centro del Claro.

                    Cerró los ojos. Y por primera vez, no floreció por accidente.

                    Lo hizo a propósito.

                    Una explosión suave, de colores imposibles, cubrió el lugar. No era magia. Era decisión.

                    El Claro, en lugar de asustarse... se rió.

                    Las ramas aplaudieron. Las flores nuevas bailaron. Y desde el cielo cayó una lluvia de pétalos que olían a galletas recién horneadas.

                    —Creo... que lo hicimos —susurró Nilo.

                    —¿Salvar al futuro antagonista? —preguntó Luma, divertida.

                    —Salvar un recuerdo que todavía estaba por nacer.

                    Umbra se giró. Estaba cubierto de flores, con una sonrisa rara, medio torcida, pero completamente suya.

                    Y entonces, sin previo aviso, florecióle el pelo a Luma.

                    —¡OYE! —protestó ella, mientras le crecía un mini jardín en la cabeza.

                    Umbra se encogió de hombros.

                    —Fue sin querer... creo.

                    Todos rieron.

                    Y el bosque, por primera vez en mucho tiempo, recordó cómo se sentía eso.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="FIN">FIN</button>
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

export default ElClaroDeLasRisasPassage;
