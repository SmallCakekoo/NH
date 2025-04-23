class AntesDelAlbaPassage extends HTMLElement {
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
                    La noche anterior fue extraña.
                    No por la luna —que esta vez no salió—, ni por la brisa —que se quedó quieta—.
                    Fue extraña porque el bosque parecía... esperar.

                    Nilo también.

                    No durmió.

                    Sentado junto a Luma, talló con una piedra sobre una corteza caída. No un símbolo mágico. Solo un círculo.
                    Una forma sin inicio ni final.

                    —¿Crees que lo vas a lograr? —preguntó Luma, con tono suave, como si tuviera miedo de romper algo frágil.

                    Nilo no respondió de inmediato.
                    Estaba cansado. Pero no del cuerpo.

                    —No lo sé. Pero creo que ya no se trata de eso.

                    Guardó la corteza en su bolsita de semillas.

                    —Quiero saber qué olvidamos. Por qué él es así. Por qué nosotros somos así.

                    El silencio fue largo, pero no incómodo.
                    Era como el que existe entre las notas de una canción importante.

                    Al amanecer, el Claro no estaba igual.
                    Donde antes había vida, ahora había un camino de hojas oscuras. No muerto. No vivo. Solo... suspendido.

                    Y al fondo, donde el sol aún no tocaba, él lo esperaba.

                    Umbra no se movía.

                    Solo estaba.

                    Nilo respiró hondo. No para llenarse de valor. Sino para vaciarse de miedo.

                    —Estoy listo —dijo.

                    Luma asintió, conteniendo las ganas de abrazarlo. Sabía que este paso era solo suyo.

                    Y así, Nilo dio el primer paso hacia la raíz de todo.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="El lugar donde empezó el olvido">Entrar al bosque marchito</button>
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

export default AntesDelAlbaPassage;
