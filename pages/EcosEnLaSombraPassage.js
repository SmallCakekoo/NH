class EcosEnLaSombraPassage extends HTMLElement {
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
                    Nilo no dijo nada. El recuerdo de la sombra seguía vibrando en su interior.

                    Se alejó del claro sin mirar atrás. No por miedo, sino por respeto. No todos los encuentros necesitan respuesta inmediata. Algunos germinan en silencio.

                    Días después, mientras ayudaba a Luma a construir un nido para unos pájaros de luz, el eco volvió.

                    La figura torcida. Los no-ojos. La tristeza como niebla.

                    —¿Qué harías si alguien olvida quién fue? —preguntó de la nada, mirando una piedra como si fuera sabia.

                    Luma parpadeó. Lo miró como quien intenta descifrar si es una pregunta profunda o el inicio de una broma.

                    No respondió. Pero uno de los pájaros pareció asentir con la cabeza.

                    Nilo, aunque no lo sabía, ya estaba recordando por los dos. O al menos eso le gustaba creer. Porque la alternativa era aceptar que hablaba solo.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Tierra de Olvidos">Ir al Bosque Marchito</button>
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

customElements.define("ecos-en-la-sombra-passage", EcosEnLaSombraPassage);
