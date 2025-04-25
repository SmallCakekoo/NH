class EcoIrrealPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS4.png" alt="Escena del pasaje">
                <div class="passage-text">
                    —No era mío.

                    Nilo se incorporó, el pecho agitado, como si acabara de despertar de un sueño que no le pertenecía.
                    Sus ojos seguían clavados en el aire donde segundos antes danzaba la imagen de la mujer de pétalos.

                    —Yo no. . . yo no la conozco.

                    Luma flotaba cerca, en silencio. Sus cipselas titilaban con una luz tenue, reflejando aún los últimos rastros del recuerdo.
                    También ella lo había visto.
                    Y aunque no entendía del todo lo que era, había sentido algo. Una cercanía inexplicable. Una nostalgia nueva.

                    —¿Quién era? —preguntó, apenas rozando el sonido.

                    Nilo negó con la cabeza.

                    —No importa. Seguro fue un eco viejo. . . de alguien más. Alguna sombra del Claro.
                    Una ilusión.

                    Pero su voz no convencía a nadie. Ni a él mismo.

                    —¿Y si no? —dijo Luma, casi sin atreverse.

                    Nilo se volvió hacia ella, con los labios apretados.

                    —¿Y si sí? ¿Qué esperas que haga? ¿Perseguir a una mujer hecha de pétalos que solo existe en la bruma de un sueño? ¿Decidir que soy parte de algo que ni siquiera entiendo?

                    Luma no respondió.
                    Una de sus cipselas se soltó sin que ella lo notara, y comenzó a flotar suavemente frente a Nilo.
                    En ella, la imagen volvió a brillar.
                    La mujer entre risas. El bosque floreciendo a su paso. Una risa que acariciaba los márgenes del olvido.

                    Nilo dio un paso atrás.

                    —No. No quiero saber. No quiero ver más recuerdos.

                    Se dio media vuelta, como si pudiera sacudirse la imagen con el viento.

                    —Los recuerdos nublan. Yo necesito claridad. Y esto… esto me hace sentir perdido.

                    El claro guardó silencio. Hasta las hojas dejaron de caer por un instante.

                    Luma descendió despacio. Observó la cipsela danzante. La tomó.

                    Y por primera vez, no la dejó ir.

                    —Si tú no los quieres. . .—dijo en voz baja, con una firmeza que nunca antes había sentido en su centro—. . ..yo los guardaré.

                    Sus demás cipselas comenzaron a encenderse, una a una.
                    No con fuego.
                    Con memoria.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El susurro de los siglos">Escuchar cómo el Claro responde a Luma</button>
                    <button class="option-button" data-target="La negación de Nilo">Seguir a Nilo en su huida del recuerdo</button>
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

export default EcoIrrealPassage;
