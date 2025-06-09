class UltimoEncuentroPassage extends HTMLElement {
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
                  <img class="passage-image" src="assets/images/PS17.png" alt="Escena del pasaje">
               <div class="passage-text">
                    Nilo no tuvo que decir nada.
                    Umbra ya lo sabía.

                    La presencia del pequeño guardián le erizaba las raíces, como si algo antiguo —algo que había aprendido a callar— volviera a la superficie.

                    —¿Por qué has venido? —murmuró Umbra, su voz temblaba, profunda, como si hablara a través del mismo suelo.

                    —Porque nadie merece desaparecer sin ser recordado, pero necesito que te detengas —respondió Nilo.

                    El silencio se volvió espeso.
                    Ni los hongos se movían.
                    El bosque entero parecía esperar una confesión.

                    —Yo no quería hacer daño. . .—susurró Umbra— pero tenía tanto miedo de desaparecer.
                    Así que tomé. Tomé todo lo que pude.
                    Memorias cálidas. Canciones. Risas. Hasta los nombres de los árboles.
                    Las bebí.
                    Y en su lugar. . . dejé sombra.

                    La tierra crujió. Los hongos temblaron levemente, como si revivieran el dolor.
                    Era cierto.
                    Umbra había marchitado el bosque. No por odio. Más bien, por hambre. Por vacío.

                    —Si me tocas. . . te arrastraré conmigo. No podré evitarlo. Corromperé lo que queda de ti.

                    Nilo bajó la mirada, no con miedo.
                    Con compasión. Y firmeza.

                    —No todo se perderá.

                    Umbra titubeó.
                    Por primera vez, no por culpa ni rencor…
                    Sino por duda. Por un deseo de ser otra cosa.

                    Y entonces… ocurrió.

                    Un recuerdo emergió.
                    Pero no de Umbra.

                    Era de Nilo.

                    Un destello de sol.
                    Luma, con los ojos cerrados, recibiendo una gota brillante.
                    Una memoria. Varias memorias, eran todas las memorias de la gente que Nilo alguna vez había cuidado.

                    —¿Qué has hecho? —susurró Umbra, confundido.

                    —He hecho espacio —respondió Nilo.

                    Y dio un paso más.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Epílogo">Unirse a Umbra</button>
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

export default UltimoEncuentroPassage;
