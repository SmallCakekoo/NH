class RaízInciertaPassage extends HTMLElement {
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
                    Al día siguiente, Nilo volvió al claro.

                    No había dormido bien. El recuerdo —o el sueño— seguía aferrado a su mente como una espina suave, que no dolía pero no lo dejaba en paz.

                    El árbol bajo el que se había quedado dormido seguía allí, dorado y silencioso. Pero algo había cambiado. No en el árbol. En él.

                    Se sentó con las piernas cruzadas, como había visto hacer a los sabios de la aldea. Cerró los ojos. Respiró lento.

                    —¿Qué quieres mostrarme? —susurró.

                    Nada.

                    El viento pasó, ignorante. Las hojas cayeron sin apuro. Y sin embargo… había algo. Un murmullo apenas audible. Como si el claro susurrara, pero no a él.

                    "Recuerda. . . quién fuiste antes de preguntar. . ."

                    Nilo abrió los ojos de golpe. ¿Antes de qué? ¿Qué quería decir eso?

                    —¿Antes de preguntar? ¿Qué significa? —dijo en voz alta, esta vez sin temor a romper el silencio.

                    Luma apareció entre la niebla, como si la hubiera llamado con el pensamiento.

                    —¿Otra vez hablando solo?

                    —No estoy solo —respondió Nilo, más seguro de lo que esperaba—. Solo que el bosque. . . aún no está seguro de que yo sea yo.

                    Luma se sentó a su lado. No dijo nada por un rato. Luego, con la voz más tranquila que nunca:

                    —Entonces tal vez no tienes que convencer al bosque. Tienes que recordarte a ti.

                    Nilo la miró. Y por primera vez, pensó que quizá la respuesta no estaba en los árboles. Sino en sus raíces.

                    Las suyas.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Caminos de Memoria">Buscar en su historia</button>
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

export default RaízInciertaPassage;
