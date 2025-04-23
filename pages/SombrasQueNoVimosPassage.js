class SombrasQueNoVimosPassage extends HTMLElement {
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
                    Nilo no volvió, ni siquiera aventó la mirada. El recuerdo temblaba detrás de él como un hilo de luz a punto de apagarse, pero no se atrevió a tocarlo. Algo en su interior gritaba que no estaba listo así que decidió olvidar.

                    En los siguientes días el claro se volvió más callado. Menos claro. Las hojas que antes susurraban ahora parecían guardar silencio. Y aunque Luma siempre estaba a su lado, incluso su voz sonaba lejana.

                    Pasaron días muchos más días.

                    Luego semanas.

                    El bosque ya no murmuraba su nombre.

                    Nilo se lanzó de cabeza a las tareas del día: ayudar en la aldea, limpiar el pozo, llevar mensajes entre ramas. Todo menos pensar. Todo menos volver. Pero en las noches, soñaba con pétalos que no terminaban de abrirse, y con sombras que se estiraban buscando algo perdido.

                    Una tarde, bajo el peso de esa duda que no se nombra, decidió volver al Claro.

                    El lugar lo recibió con una niebla espesa, como si no lo reconociera. O como si lo reconociera demasiado bien.

                    Allí, entre los árboles más antiguos, escuchó por fin una voz. No una que viniera de fuera, sino de muy hondo. Una voz que no preguntaba, que afirmaba:

                    "Hay otra presencia. No como tú, pero cercana. Una raíz sin guía. Un brote olvidado. Su nombre es Umbra."

                    Nilo sintió que el bosque entero le hablaba. Y también, que lo juzgaba con dulzura, Pues a pesar de no estar disponible para atender el bosque se había dedicado a cuidar a su aldea.

                    —¿Por qué ahora? —preguntó en voz baja.

                    "Porque ahora... estás listo para recordar lo que decidiste olvidar y enfrentar a quien le decidiste temer."
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Raíz de Sombra">Seguir la voz de los árboles</button>
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

customElements.define("sombras-que-no-vimos-passage", SombrasQueNoVimosPassage);
