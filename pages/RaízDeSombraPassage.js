class RaízDeSombraPassage extends HTMLElement {
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
                    El nombre retumbó en su pecho como una campana antigua: Umbra.

                    No sabía quién era. Ni qué quería. Solo sabía que no lo había visto... porque decidió no verlo.

                    Los días siguientes fueron un desfile de silencios. Nilo recorría el Claro como si buscara algo que había estado ahí y ya no. Las flores tardaban más en abrir. Las mariposas que antes bailaban cerca del arroyo ahora evitaban el viento. La tierra, antes húmeda y fértil, se agrietaba bajo sus pies. Incluso Luma notó que algo estaba cambiando, aunque no dijera nada.

                    En la aldea, los cambios eran imposibles de ignorar. La anciana Mina ya no recordaba las canciones que había cantado toda su vida. Los niños olvidaban los nombres de los árboles que sus padres les habían enseñado. Y el viejo Tero, el mejor tejedor de cestas, miraba sus propias manos como si fueran ajenas, incapaz de recordar patrones que dominaba desde joven.

                    —Es como si la memoria se escurriera entre los dedos —dijo alguien en el mercado, mientras intentaba recordar para qué había venido.

                    Nilo lo entendió entonces. El olvido se extendía desde el Claro hasta la aldea, marchitando no solo las plantas sino también los recuerdos. Y con cada memoria perdida, la tierra se secaba un poco más.

                    Una noche, mientras todos dormían, Nilo se acercó al árbol dorado y apoyó la frente contra su corteza.

                    —No supe qué hacer —susurró—. Tenía miedo. A veces todavía lo tengo.

                    La corteza no respondió, pero el suelo tembló suavemente, como si el bosque entero respirara con él.

                    Entonces lo entendió. No se trataba solo de él.

                    El olvido no era suyo. Era del bosque. Era de Umbra, aquella criatura abandonada que crecía alimentándose de memorias. Y si no hacía nada, crecería como maleza sobre todo lo que amaba.

                    Al amanecer, caminó sin detenerse hasta la aldea. Tenía que decirlo. Aunque no supiera cómo. Aunque nadie le creyera.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Encuentro con Umbra">Advertir a la aldea</button>
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

customElements.define("raíz-de-sombra-passage", RaízDeSombraPassage);
