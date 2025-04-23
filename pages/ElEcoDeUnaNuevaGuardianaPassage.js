class ElEcoDeUnaNuevaGuardianaPassage extends HTMLElement {
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
                    text-align: left;
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
                    El recuerdo se disipó con la suavidad de un suspiro antiguo. Luma volvió al Claro, pero ya nada era igual.

El silencio no era vacío. Era respeto.

Sus cipselas seguían encendidas, más firmes que antes. Ya no danzaban al azar: flotaban en armonía, como si supieran lo que eran ahora. Testigos. Portadoras.

Una de ellas, la más tenue, dejó caer un pétalo translúcido. Era el primero.

Luma lo miró flotar hacia la tierra, y entendió: la memoria también se desgasta. También duele. Pero mientras alguien la sostenga, el olvido no podrá reclamarlo todo.

Desde lejos, el sonido de pasos rompió el momento. Nilo. Caminaba solo, adentrándose entre los árboles, aún negando lo que había sentido.

No se volvió. No miró atrás.

Luma tampoco lo llamó.

No con palabras.

Solo cerró los ojos y susurró hacia las raíces, hacia la tierra, hacia el tiempo:

—No serás olvidado. Ninguno lo será.

Y el Claro respondió con un leve temblor, como un corazón que vuelve a latir después de mucho silencio.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Y entonces. . . ¿Que pasó con Nilo?">Y entonces... ¿Qué pasó con Nilo?</button>
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

export default ElEcoDeUnaNuevaGuardianaPassage;
