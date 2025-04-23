class UnNuevoBrotePassage extends HTMLElement {
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
                    El tiempo pasó.
                    No como un río. Como una raíz.

                    Invisible, paciente, inevitable.

                    El Claro volvió a florecer. No igual, no como antes... mejor.
                    Porque ya no era solo un lugar de recuerdos.
                    Era un lugar que había aprendido a recordar.

                    Nilo, más alto, más callado, caminaba entre las hojas nuevas.
                    Luma lo esperaba en la colina, con una sonrisa que no necesitaba palabras.

                    —¿Crees que volverá? —preguntó ella.

                    Nilo miró el horizonte.
                    La niebla aún danzaba, pero ya no asustaba.

                    —Umbra nunca se fue —dijo, y apuntó al árbol más joven del claro—. Solo cambió de forma.

                    Porque Umbra no era un enemigo.
                    Era un eco.
                    Una sombra que solo necesitaba nombre.

                    Y ahora lo tenía.

                    Un brote nuevo crecía donde Umbra lloró.
                    Y de él, cada día, caía una hoja distinta.
                    Una historia. Un recuerdo. Un aviso.

                    Y en la aldea, cuando los nuevos retoños preguntaban por qué a veces el bosque parecía susurrar nombres desconocidos, los ancianos solo decían:

                    —Porque recordar es como sembrar.
                    Si lo haces bien... nunca termina.
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

export default UnNuevoBrotePassage;
