class CaminosDeMemoriaPassage extends HTMLElement {
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
                    La idea no lo dejó en paz.

                    Esa noche, Nilo se sentó frente al fuego con los ojos clavados en las llamas. Las sombras danzaban en las paredes como fragmentos de recuerdos que aún no se dejaban atrapar.

                    —¿Quién fui antes de preguntar?

                    Las palabras le pesaban. No porque fueran tristes, sino porque eran largas, como raíces hundidas en una tierra que no había pisado en años.

                    Al amanecer, antes de que la bruma se levantara, caminó hasta el borde del claro y giró en dirección opuesta. No hacia el corazón del bosque, sino hacia la aldea.

                    Hacía mucho que no volvía a ese sitio.

                    Pasó entre las casas aún dormidas. Nadie lo detuvo. Nadie lo vio.

                    Y allí, detrás de la colina, estaba.

                    La vieja choza donde había vivido con su madre niebla, antes de que la niebla lo llevara lejos, antes de saber que el bosque hablaba.

                    El lugar estaba abandonado. Cubierto de musgo y flores silvestres. Pero dentro. . . algo permanecía.

                    Un cuaderno de hojas secas. Dibujos de árboles con rostros. Notas que no entendía del todo, pero que hablaban de la memoria de las cosas. De cómo algunas semillas nacen recordando.

                    En una de las páginas, un símbolo familiar. Uno que había visto en el claro. Uno que se le había clavado en el pecho como un eco.

                    —Mi madre. . . ¿sabía?

                    Y entonces lo recordó. Una canción. No una letra. Una vibración. Algo que ella cantaba cuando él tenía miedo.

                    "Si escuchás lo que crece, vas a saber quién sos."

                    Nilo salió de la choza con el cuaderno apretado contra el pecho.

                    No tenía todas las respuestas. Pero ahora tenía un mapa.

                    Y el bosque. . . lo estaba esperando.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Llamado Verdadero">Regresar al Claro con nuevas preguntas</button>
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

customElements.define("caminos-de-memoria-passage", CaminosDeMemoriaPassage);
