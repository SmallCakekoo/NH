class ElGuardiánDeLasMemoriasPassage extends HTMLElement {
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
                    La aldea ya no era la misma.

                    Calles cubiertas de musgo, puertas abiertas al vacío, faroles sin luz.

                    Pero entre las sombras, algo permanecía.

                    Nilo caminó en silencio, el símbolo del recuerdo apretado en su mano, como si aún pudiera calentar algo.

                    No podía enfrentarse a Umbra. Pero sí podía proteger lo poco que quedaba.

                    Reunió historias, restauró nombres borrados, plantó flores donde hubo risas. Archivó canciones en murales. Pintó las memorias en piedras, para que ni el viento ni el olvido pudieran arrancarlas del todo.

                    Los niños —pocos— comenzaron a jugar otra vez. Con miedo. Pero también con curiosidad.

                    Y en lo más profundo del bosque, Umbra reinaba. Oscuro. Triste. Silencioso.

                    Pero cada vez que alguien en la aldea reía, una flor aparecía. No en el bosque. En el corazón de una pared. En una taza olvidada. En una grieta del suelo.

                    Como si los recuerdos, aunque rotos, supieran encontrar un camino volviéndose a crear.

                    Nilo no era un héroe.

                    Era un guardián.

                    Y eso, por ahora... bastaba.
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

export default ElGuardiánDeLasMemoriasPassage;
