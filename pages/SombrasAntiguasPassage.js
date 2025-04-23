class SombrasAntiguasPassage extends HTMLElement {
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
                    El destello no fue un error.

                    Lo supo cuando volvió al claro. No al mismo punto exacto, pero sí al mismo silencio. Una neblina espesa dormía entre los troncos, y los rayos de luz parecían esquivarla.

                    Nilo se adentró despacio, como si cada paso tocara una fibra antigua. No hubo voces. No hubo viento. Solo ese murmullo grave del bosque, como si recordara algo que aún no estaba listo para contar.

                    Y entonces lo sintió.

                    No una presencia. Una ausencia.
                    Un hueco. Un espacio donde algo alguna vez fue.

                    Se inclinó sobre una raíz quemada. No por fuego, sino por tiempo. Como si la memoria misma se hubiese marchitado ahí.

                    —¿Quién eres? —murmuró al vacío.

                    Nada respondió. Pero al tocar la raíz, un escalofrío le recorrió el cuerpo, y su mente se llenó de imágenes que no eran suyas. Guerras invisibles. Flores que lloraban. Y una sombra que miraba desde lejos, esperando ser recordada.

                    Al volver en sí, Nilo temblaba. No de miedo. De certeza.

                    Eso que había visto... eso que había elegido ignorar, estaba perdiéndose.

                    Y si no hacía algo, se lo llevaría todo.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Consejo de Corteza">Hablar con los sabios del bosque</button>
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

customElements.define("sombras-antiguas-passage", SombrasAntiguasPassage);
