class ClaroDelBosquePassage extends HTMLElement {
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
                  <img class="passage-image" src="assets/images/PS2.webp" alt="Escena del pasaje">
                <div class="passage-text">
                    Los árboles del claro se alzaban en un silencio profundo, como si llevaran siglos esperando. Sus troncos, anchos y cubiertos de líquenes, parecían escritos con signos antiguos. No palabras humanas, sino símbolos vivos, palpitantes, que se curvaban al ritmo del viento.

                    Al pisar el suelo mullido, Nilo se detuvo.

                    Sintió un leve temblor, como si el bosque contuviera el aliento. Las hojas crujieron sin romperse. El aire olía a tierra húmeda, a algo viejo. . . y despierto. Una vibración suave le recorrió el cuerpo, desde los pies hasta las puntas vaporosas de su forma.

                    —¿Escuchas eso? —susurró Luma, apenas visible bajo la bruma dorada.

                    Pero no era un sonido. Era una memoria. No suya. Del bosque.

                    Una voz sin boca, sin origen claro, susurraba desde todos lados:

                    "Vendrá un guardián desde el rocío…"

                    Nilo entrecerró los ojos. El claro no solo hablaba. . . lo recordaba.

                    "Él nos recordará cuando todo se olvide."

                    Luma lo miró de reojo, con una chispa de duda y asombro.

                    —¿Crees que. . . se refiere a ti?

                    Nilo se encogió un poco, como si quisiera hacerse aún más pequeño.

                    —¿Yo? No, no, imposible. Si fuera yo. . . el bosque estaría en serios problemas. Apenas y logro cruzar la aldea sin enredarme en una raíz.

                    Luma lo miró de costado, con esa sonrisa que no era burla, sino ternura.

                    —Quizá eso es justo lo que necesita el bosque: alguien que no lo tenga todo resuelto. Alguien que sepa perderse.

                    Ante la respuesta de Luma, Nilo abrió la boca para responder, pero no encontró palabras. Aún sentía ese zumbido en el pecho, esa pregunta que siempre había llevado consigo. . . ahora parecía tener eco.

                    Regresaron a la aldea con la niebla aún pegada a la piel, pero Nilo no pudo olvidarlo. Algo lo llamaba, con la paciencia de las raíces.

                    Y al día siguiente, volvió.

                    Y al otro también.

                    A veces con Luma y otras veces solo.

                    Hasta que los susurros dejaron de ser murmullos. . .

                    y empezaron a hablarle por su nombre.
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

export default ClaroDelBosquePassage;
