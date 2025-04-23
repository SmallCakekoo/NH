class ElClaroDeLasRisasPassage extends HTMLElement {
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
                    No todos entran al Claro.

                    Pero esa mañana, el bosque pareció abrirle paso a Nilo, a Luma... y a Umbra.

                    El suelo crujía distinto. Las raíces se movían suavemente, como si estuvieran despeinando la tierra solo para hacerles cosquillas al pasar.

                    Umbra iba al frente, con su símbolo nuevo colgando del cuello y una flor que giraba como hélice sobre su cabeza.

                    —¿Estás seguro de esto? —preguntó Luma, mientras esquivaba una enredadera que parecía querer abrazarla.

                    —No —dijo Nilo, como siempre últimamente—. Pero el Claro sí lo está.

                    El lugar brillaba. No con luz normal. Con luz de risa, de juego, de cosas que no deberían existir pero existen igual. Como un hongo que contaba chistes malos. O una piedra que se carcajeaba si le hacías cosquillas.

                    Umbra se detuvo en el centro del Claro.

                    Cerró los ojos. Y por primera vez, no floreció por accidente.

                    Lo hizo a propósito.

                    Una explosión suave, de colores imposibles, cubrió el lugar. No era magia. Era decisión.

                    El Claro, en lugar de asustarse... se rió.

                    Las ramas aplaudieron. Las flores nuevas bailaron. Y desde el cielo cayó una lluvia de pétalos que olían a galletas recién horneadas.

                    —Creo... que lo hicimos —susurró Nilo.

                    —¿Salvar al futuro antagonista? —preguntó Luma, divertida.

                    —Salvar un recuerdo que todavía estaba por nacer.

                    Umbra se giró. Estaba cubierto de flores, con una sonrisa rara, medio torcida, pero completamente suya.

                    Y entonces, sin previo aviso, florecióle el pelo a Luma.

                    —¡OYE! —protestó ella, mientras le crecía un mini jardín en la cabeza.

                    Umbra se encogió de hombros.

                    —Fue sin querer... creo.

                    Todos rieron.

                    Y el bosque, por primera vez en mucho tiempo, recordó cómo se sentía eso.
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

customElements.define(
  "el-claro-de-las-risas-passage",
  ElClaroDeLasRisasPassage
);
