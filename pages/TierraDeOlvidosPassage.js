class TierraDeOlvidosPassage extends HTMLElement {
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
                    El Bosque Marchito seguía oliendo a polvo antiguo y melancolía rancia.

                    Nilo no sabía por qué había vuelto. Solo... lo sintió. Como si algo pequeño lo llamara sin palabras.

                    Y ahí estaba.

                    La sombra. Pequeña. Enredada en una flor que crecía al revés, intentando usar el símbolo que él le había dejado como cuchara para alimentar a un hongo.

                    —¿Tú otra vez? —murmuró. La sombra se cayó de espaldas... y floreció.

                    Literalmente: una flor azul le brotó de la cabeza y luego se escondió con un plop tímido.

                    Se miraron. La criatura lo señaló.

                    —¿Amigo?

                    Nilo no respondió de inmediato. Solo se sentó cerca, sacó su cuaderno, y apuntó algo.

                    —No recuerdas quién eras... tal vez podamos inventarlo.

                    La sombra tocó el cuaderno. Estornudó pétalos.

                    —Primero, deja de comerte las piedras —dijo Nilo. La sombra se tragó otra.

                    Él suspiró. Y sonrió.

                    Y en algún rincón del bosque, algo volvió a brotar.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Lecciones para una sombra">Enseñar cosas básicas</button>
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

export default TierraDeOlvidosPassage;
