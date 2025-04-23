class ClaroDelBosqueDudosoPassage extends HTMLElement {
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
                    Los árboles del claro se alzaban en un silencio tenso, como si hubieran detenido su respiración apenas lo vieron llegar. Sus troncos, anchos y cubiertos de líquenes, parecían ocultar más de lo que mostraban. No eran signos vivos. Eran cicatrices.

                    Nilo dio un paso, y el suelo mullido no tembló. Se hundió apenas, como si no quisiera sostenerlo.

                    El aire olía a algo estancado, no muerto, pero dormido durante demasiado tiempo. El bosque no lo llamaba. Lo observaba.

                    —¿Sientes eso? —murmuró Luma, esta vez más cerca, casi tocándolo, como si temiera que él se desvaneciera.

                    No había susurros. Solo una sensación. Como si alguien estuviera decidiendo si él debía estar ahí.

                    Y entonces, una voz muy lejana, apenas audible entre los líquenes, dijo:

                    "Vendrá un guardián. . ."

                    Pero se apagó. No terminó la frase.

                    Nilo sintió frío, a pesar del sol filtrado.

                    —¿Crees que. . . se refiere a ti? —preguntó Luma, sin la misma chispa, con una preocupación disimulada.

                    —No lo sé —respondió Nilo, sin excusas, sin chistes. Algo dentro de él se agitaba, pero no sabía si era miedo o vergüenza.

                    El claro no habló más. El silencio no era cálido. Era expectante.

                    Y aun así, algo lo llamaba.

                    Volvieron a la aldea en silencio. Pero esa noche Nilo no durmió.

                    Y al día siguiente, volvió.

                    Y al otro también.

                    Aunque el bosque no lo esperaba.

                    Hasta que un día, lo llamó por su nombre.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Primer Recuerdo">Escuchar los árboles</button>
                    <button class="option-button" data-target="Un Recuerdo Fragmentado">Despertar de golpe</button>
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

export default ClaroDelBosqueDudosoPassage;
