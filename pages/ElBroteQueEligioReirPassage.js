class ElBroteQueEligioReirPassage extends HTMLElement {
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
                    Esa noche, bajo la luna en espiral, Umbra dejó de florecer por un rato.

                    Estaba sentado junto a Nilo, en la colina detrás de la aldea, donde el musgo contaba secretos y las piedras parecían saber escuchar.

                    —No sé quién fui antes —dijo Umbra, mirando una luciérnaga que se enredaba en sus ramas—. Pero me gusta esto. Ser... raro. Reírme. Florecer sin permiso.

                    Nilo sonrió, apoyando su cuaderno sobre las rodillas.

                    —No necesitas recordar para empezar. Puedes inventarte.

                    Sacó un pequeño objeto: un símbolo nuevo, hecho con ramitas entrelazadas, una flor y un hilo rojo.

                    —Este no es un recuerdo. Es una posibilidad. Un "quién podrías ser".

                    Umbra lo tomó con cuidado. Lo sostuvo como si pesara lo mismo que una estrella.

                    —Entonces... ¿ya no soy "el brote torcido"? ¿Ni "el niño hongo"? ¿Ni "el que florece por los pies"?

                    —Solo si tú quieres.

                    Umbra pensó un momento. Sus ojos, aún sin forma exacta, brillaron con algo que parecía decisión. O travesura.

                    —Quiero llamarme... Floronio Destructor del Olvido.

                    Nilo parpadeó. Una vez. Dos veces.

                    —¿Eso es serio?

                    —¡Claro que no! Pero suena épico, ¿no?

                    Y floreció. Con tanta fuerza que a Nilo le salieron pétalos del bolsillo.

                    —Está bien —rió Nilo—. Pero para mí... sigues siendo Umbra. Uno nuevo. Uno distinto.

                    La criatura asintió. Y por primera vez, floreció en silencio. No por accidente. Sino porque así lo eligió.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El Claro de las Risas">Un final nuevo</button>
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
  "el-brote-que-eligio-reir-passage",
  ElBroteQueEligioReirPassage
);
