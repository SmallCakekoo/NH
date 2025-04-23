class ElReinoDelOlvidoPassage extends HTMLElement {
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
                    El símbolo tembló entre las manos de Nilo y el pecho de Umbra.

                    Por un momento, la sombra flaqueó.

                    El bosque pareció contener la respiración.

                    Pero entonces, Umbra cerró los ojos... y rompió el símbolo con una sola mano.

                    El crujido fue seco. Como una memoria quebrándose.

                    —No necesito recordar —susurró Umbra—. Ya no.

                    La oscuridad floreció como una plaga. Las raíces se enredaron con las nubes. Los hongos cubrieron el cielo. La aldea, la luz, los nombres... todo comenzó a desvanecerse.

                    Nilo cayó de rodillas.

                    —Lo intenté... —murmuró.

                    Y aún así, no lloró.

                    Porque aunque Umbra lo venció, una sola cosa no logró apagar:

                    Nilo seguía recordando.

                    Lo mantuvieron con vida. Encerrado en una flor de piedra. Silencioso, pero intacto.

                    Los niños, en generaciones futuras, dirían que en lo más profundo del bosque había una estatua que aún susurraba nombres en sueños. Que si uno se acercaba lo suficiente, podía oír risas que el tiempo no había podido borrar.

                    Umbra reinó. El bosque obedeció.

                    Pero los recuerdos... aún resistían.
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

export default ElReinoDelOlvidoPassage;
