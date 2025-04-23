class InterferenciaDelClaroPassage extends HTMLElement {
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
                    No tardó mucho en pasar.

                    El Claro... reaccionó.

                    Primero fueron los árboles. Se inclinaron, apenas, como si sus ramas quisieran ver mejor.

                    Luego, las raíces comenzaron a moverse bajo la tierra, como si el suelo respirara con más atención.

                    Nilo fingió que no lo notaba.

                    —No hagas nada raro —le susurró a la sombra.

                    Ella ya tenía tres flores nuevas y estaba abrazando una piedra con mucha convicción.

                    —Nada raro —repitió Nilo, entre dientes.

                    Pero entonces, el aire cambió. El viento silbó una melodía antigua. Y uno de los pájaros de luz se acercó volando... y desmayó al verla.

                    —¡Shhh! ¡No florezcas ahora! —suplicó Nilo.

                    Demasiado tarde.

                    Una explosión de pétalos multicolor cubrió el claro, seguida por un pequeño estornudo de flores y una risa de hongo.

                    —Esto... esto no está pasando —dijo Nilo mirando a su alrededor.

                    Desde lo alto, un roble viejo crujió como si se riera.

                    —¿El Claro te está juzgando? —preguntó la sombra, señalando al árbol.

                    Nilo la miró.

                    —El Claro me está observando como si supiera algo que yo aún no quiero saber.

                    Y eso lo inquietaba. Porque el bosque recordaba cosas que él apenas empezaba a entender.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Un paseo incómodo">Llevarlo con Luma</button>
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

export default InterferenciaDelClaroPassage;
