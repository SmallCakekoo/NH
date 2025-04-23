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

customElements.define("claro-del-bosque-passage", ClaroDelBosquePassage);
