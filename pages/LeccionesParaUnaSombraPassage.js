class LeccionesParaUnaSombraPassage extends HTMLElement {
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
                    —Eso se llama "sonrisa" —explicó Nilo, dibujando una carita feliz en la tierra.

                    La sombra lo miró. Luego dibujó otra... con doce ojos, colmillos y una flor en la frente.

                    —Cerca —dijo Nilo, con una risita nerviosa.

                    Pasaron la tarde así. Él enseñando palabras simples: amigo, árbol, no comas piedras. Ella repitiendo todo a su manera.

                    Cada vez que se emocionaba: florecía.
                    Cada vez que se frustraba: también.

                    El claro terminó cubierto de flores locas, brotes que aplaudían solos y una rama que decía "hola" cada vez que alguien pasaba.

                    —Eres... muy tú —dijo Nilo, cubierto de pétalos y con savia en la ceja.

                    La sombra se inclinó. ¿Agradecimiento? ¿Instinto de comerse su zapato?

                    Nilo anotó en su cuaderno:

                    "Quizás recordar no siempre es volver. A veces, es reinventar."
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Interferencia del Claro">El bosque reacciona</button>
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

export default LeccionesParaUnaSombraPassage;
