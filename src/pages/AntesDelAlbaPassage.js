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
                    background-color: #011330;
                    color: #00ecd6;
                    padding: 20px;
                    border: 4px solid #07c0d5;
                    border-image: repeating-linear-gradient(
                        45deg,
                        #07c0d5,
                        #07c0d5 10px,
                        #00ecd6 10px,
                        #00ecd6 20px
                    ) 4;
                    box-shadow: 
                        0 0 0 4px #011330,
                        0 0 0 8px #07c0d5;
                    position: relative;
                }

                .passage-text::before {
                    content: '';
                    position: absolute;
                    top: -2px;
                    left: -2px;
                    right: -2px;
                    bottom: -2px;
                    background: repeating-linear-gradient(
                        45deg,
                        transparent,
                        transparent 2px,
                        rgba(0, 236, 214, 0.1) 2px,
                        rgba(0, 236, 214, 0.1) 4px
                    );
                    pointer-events: none;
                }

                .option-button {
                    padding: 15px 30px;
                    font-size: 1.4em;
                    background-image: url('assets/images/FondoBTN.webp');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-color: #011330;
                    color: #00ecd6;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    font-family: var(--font-buttons);
                    text-shadow: 0 0 5px #07c0d5;
                    box-shadow: 
                        inset 0 0 10px rgba(0, 236, 214, 0.3),
                        0 0 10px rgba(0, 236, 214, 0.3);
                    outline: none;
                    min-width: 250px;
                    animation: pulse 2s infinite;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .option-button:hover {
                    transform: scale(1.05);
                    box-shadow: 
                        inset 0 0 20px rgba(0, 236, 214, 0.5),
                        0 0 30px rgba(0, 236, 214, 0.5);
                }

                .option-button:active {
                    transform: scale(0.98);
                }

                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 
                            inset 0 0 10px rgba(0, 236, 214, 0.3),
                            0 0 10px rgba(0, 236, 214, 0.3);
                    }
                    50% {
                        box-shadow: 
                            inset 0 0 15px rgba(0, 236, 214, 0.5),
                            0 0 20px rgba(0, 236, 214, 0.5);
                    }
                }

                .options-container {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 30px;
                }
            </style>

            <div class="passage-container">
               <img class="passage-image" src="assets/images/PS28.webp" alt="Escena del pasaje">
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
