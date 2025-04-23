class UnPaseoIncomodoPassage extends HTMLElement {
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
                    —Te vas a portar bien. Nada de florecer en público. Y si alguien te pregunta qué eres, tú... tú toses. Así, cof cof. ¿Entendido?

                    Umbra parpadeó. Luego asintió.
                    Cinco pasos después, ya había florecido una maceta, saludado a una hormiga y confundido una silla con un "señor árbol".

                    Nilo suspiró mientras entraban a la aldea.

                    —Esto va a salir terriblemente mal.

                    Luma los esperaba en la plaza, sentada sobre una roca pulida con forma de estrella. Una brisa jugaba con sus pelitos voladores, esos que parecían siempre a punto de despegar.

                    —¿Quién es tu pegote nuevo? —preguntó ella, con media sonrisa.

                    —Un brote perdido. Lo encontré cerca del Claro. No recuerda nada... ni siquiera si es peligroso.

                    Umbra dio un paso al frente.

                    —Hola. ¿Tú eres... Lula?

                    —Luma. —Ella alzó una ceja.

                    —¡Casi! —Umbra floreció. Esta vez fue una lluvia de pétalos dulzones con aroma a mango.

                    —¿Acaba de florecerme encima? —dijo Luma, mientras sacudía su hoja con cara de "¿qué clase de cita botánica es esta?"

                    Uno de los aldeanos se acercó, curioso. Umbra lo miró... y le floreció el sombrero.

                    —¡No toques cosas ajenas! —Nilo lo empujó con suavidad hacia una pared.

                    Luma cruzó los brazos, en silencio.

                    —Nilo, ¿sabes lo que haces?

                    Nilo se quedó quieto. Miró a Umbra, que ahora intentaba enseñarle a una piedra a caminar.

                    —No —respondió—. Pero creo que es importante.

                    Luma lo observó en serio por unos segundos... y luego le lanzó una florcita juguetona a la cabeza.

                    —Pues a ver cómo lo explicas cuando el Consejo empiece a notar que hay flores nuevas en las tejas.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El brote que eligió reír">Aceptar el cambio</button>
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

export default UnPaseoIncomodoPassage;
