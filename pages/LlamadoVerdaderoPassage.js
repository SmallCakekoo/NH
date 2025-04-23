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

customElements.define("llamado-verdadero-passage", LlamadoVerdaderoPassage);
