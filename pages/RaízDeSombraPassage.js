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
                <img class="passage-image" src="assets/images/PS14.webp" alt="Escena del pasaje">
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

export default RaízDeSombraPassage;
