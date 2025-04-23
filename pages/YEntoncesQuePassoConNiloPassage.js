class YEntoncesQuePassoConNiloPassage extends HTMLElement {
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
                    text-align: left;
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
                    ¿Nilo? Nilo no miró atrás.

El viento lo empujaba entre ramas quebradas, lejos del Claro, lejos de Luma, lejos de la verdad que no quiso sostener.

A cada paso, la bruma se espesaba. No era niebla real: era el olvido. Suave al principio, como un suspiro sobre el agua. Luego más denso, como si la historia comenzara a borrarse tras él.

—No era mío —repitió, como un mantra hueco.

Pero en su pecho algo palpitaba. No un recuerdo, sino su ausencia. Un hueco que crecía, hambriento.

La voz de Luma no lo siguió. Tampoco los ecos del Claro.

Solo el silencio.

Y en ese silencio se evaporó.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="">FIN</button>
                </div>
            </div>
        `;
  }

  setupEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll(".option-button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        if (target) {
          this.dispatchEvent(
            new CustomEvent("passage-change", {
              detail: { target },
              bubbles: true,
              composed: true,
            })
          );
        } else {
          this.dispatchEvent(
            new CustomEvent("story-end", {
              bubbles: true,
              composed: true,
            })
          );
        }
      });
    });
  }
}

export default YEntoncesQuePassoConNiloPassage;
