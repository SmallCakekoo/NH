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

customElements.define("eco-irreal-passage", EcoIrrealPassage);
