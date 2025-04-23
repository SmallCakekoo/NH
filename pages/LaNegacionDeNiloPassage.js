class LaNegacionDeNiloPassage extends HTMLElement {
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
                    El recuerdo se desplegó como una flor que no conocía estaciones. Sin permiso. Sin piedad.

Luma ya no flotaba: caía. Pero no en un abismo, sino en un río de imágenes. Sus cipselas se extendían como raíces, absorbiendo emociones ajenas, tiempos rotos.

Vio un claro distinto. Más joven. Más vivo.

La mujer de pétalos estaba allí. Su presencia era luz. Sus risas hacían florecer los árboles. Pero algo en su centro parecía desvanecerse, como si supiera que su tiempo había llegado al borde.

Y entonces lo vio: una figura más pequeña, de sombra aún incompleta. Umbra. No era oscuro, aún no. Solo un eco de lo que vendría.

La mujer se arrodilló frente a él.

—Lo siento —susurró, y sus pétalos comenzaron a caer uno a uno—. No puedo quedarme.

Umbra alzó la mano, como si pudiera detener la despedida. Pero no había ira en su gesto. Solo una tristeza tan profunda que el bosque entero contuvo el aliento.

Ella se desvaneció en un remolino de viento y memoria.

Y Umbra... no gritó. Solo se quedó quieto, hasta que la sombra empezó a crecer desde sus pies.

El olvido había nacido.

Luma despertó con un temblor en sus cipselas. Aún sentía la ausencia. El abandono. La semilla del dolor.

Y entendió que ser guardiana no era una elección de poder. Era una promesa de presencia.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El eco de una nueva guardiana">Guardar este recuerdo como el primero de muchos</button>
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

export default LaNegacionDeNiloPassage;
