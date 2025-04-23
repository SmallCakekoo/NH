class VinculoConElClaroPassage extends HTMLElement {
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
                    Con cada visita, el Claro parecía menos un lugar y más una presencia. Los árboles ya no solo susurraban... a veces, parecía que esperaban a Nilo.

                    Pero entonces, algo cambió.

                    El brillo suave que flotaba entre las ramas comenzó a apagarse. Las hojas, antes doradas, caían sin viento. Y aunque no era otoño, el suelo se cubría de ausencias.

                    Una mañana, el aire llegó más denso. Al tocar el tronco del árbol dorado, Nilo sintió un escalofrío. Un murmullo recorrió el bosque como una brisa enferma:

                    "Umbra..."

                    El nombre no sonaba como un aviso. Sonaba como un recuerdo que dolía.

                    —¿Quién es Umbra? —preguntó en voz alta, aunque sabía que el bosque rara vez respondía con claridad.

                    Pero esa vez, lo hizo.

                    Los ancianos árboles hablaron. Sus voces eran lentas, como raíces moviéndose bajo tierra.

                    "Umbra fue uno de nosotros. Un guardián de memoria."

                    "Pero nunca germinó del todo. Era solo una semilla... a la que nunca le dio el sol."

                    "Mientras otros crecíamos al calor del recuerdo, él quedó en la sombra. Olvidado antes de florecer."

                    "Desde entonces, se alimenta del olvido. Y lo que no se nombra... lo convierte en sombra."

                    Nilo sintió que algo se apretaba dentro de sí. No era miedo. Era algo más viejo. Más profundo. Como si una parte de él ya supiera esta historia… pero la hubiera olvidado.

                    El zumbido en su pecho seguía allí, más fuerte.

                    Ya no era una pregunta.

                    Era un llamado.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Hablan de Umbra">Investigar lo que ocurre</button>
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

export default VinculoConElClaroPassage;
