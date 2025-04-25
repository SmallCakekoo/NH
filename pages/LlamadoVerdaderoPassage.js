class LlamadoVerdaderoPassage extends HTMLElement {
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
                    background-image: url('assets/images/FondoBTN.png');
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
                <img class="passage-image" src="assets/images/PS11.png" alt="Escena del pasaje">
                <div class="passage-text">
                    En su camino de vuelta al Claro, el bosque no era el mismo.

                    No porque hubiera cambiado —aunque sí— sino porque Nilo lo miraba diferente. Como si cada hoja, cada raíz, fuera parte de una historia que estaba empezando a recordar. O a imaginar.

                    Pero esa mañana, el claro no le habló.
                    Le señaló.

                    Un sendero que no había estado antes.
                    O que tal vez siempre estuvo ahí, esperando que lo mereciera.

                    Lo siguió.

                    Y al final del camino, encontró una hondonada. Silencio absoluto. Árboles jóvenes, torcidos, como si hubieran crecido a tientas. Y en el centro. . . una figura pequeña. Aún no del todo formada. Negra, brillante, acurrucada.

                    Nilo se acercó, con el cuaderno contra el pecho. El ser levantó la mirada. No tenía rostro, pero algo en su gesto era puro desamparo.

                    —¿Estás solo?

                    No hubo respuesta. Solo una vibración leve. Triste. Como un recuerdo que aún no tenía forma.

                    Nilo se sentó junto a él. Sin tocarlo. Sin hablar más.

                    Se quedaron así por horas.

                    Y antes de irse, Nilo arrancó una hoja de su cuaderno y dibujó el símbolo que había encontrado. Lo dejó a su lado.

                    —Por si también estás buscando quién eres.

                    El ser no respondió. Pero algo en el suelo brotó. Una flor que no debería haber nacido allí.

                    Y cuando Nilo se alejó, no supo que había plantado una memoria.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Sombras que no vimos">Ignorarlo por miedo y seguir</button>
                    <button class="option-button" data-target="Ecos en la Sombra">Recordar ese encuentro más adelante</button>
                    <button class="option-button" data-target="El Nido de Umbra">Volver a buscarlo otro día</button>
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

export default LlamadoVerdaderoPassage;
