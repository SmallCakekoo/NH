class DeterioroEnLaAldeaPassage extends HTMLElement {
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
                    Con el paso de los días, Nilo hizo todo lo posible para guardar los recuerdos de la gente del bosque en su memoria, pues el deterioro del Claro ya no era un rumor.
                    Era real. Y había llegado a la aldea.

                    Las hojas de los árboles se marchitaban antes de caer. Las flores olvidaban cómo abrirse. Y lo más extraño: los recuerdos de los aldeanos empezaron a cambiar.

                    No desaparecían. Se torcían.
                    Risas se volvían llanto. Nombres se perdían. Momentos felices se convertían en sombras que no querían ser tocadas.

                    Nilo lo sentía todo.
                    Cada fragmento de memoria distorsionada lo alcanzaba como si fuera suyo. Como si el bosque ya no pudiera contener su propio dolor… y lo estuviera dejando caer sobre él.

                    Y Nilo los absorbía. Porque no sabía no hacerlo.

                    Se desgastaba.
                    Se desdibujaba.
                    A ratos su forma era niebla, a ratos silencio.
                    Como si el olvido también lo reclamara a él.

                    Pero aún quedaba algo.
                    Una elección.
                    Una última decisión.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="En busca de Umbra">Ir en busca de Umbra</button>
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

customElements.define(
  "deterioro-en-la-aldea-passage",
  DeterioroEnLaAldeaPassage
);
