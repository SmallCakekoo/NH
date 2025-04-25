class ConsejoDeCortezaPassage extends HTMLElement {
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
               <img class="passage-image" src="assets/images/PS7.webp" alt="Escena del pasaje">
                <div class="passage-text">
                    No cualquiera puede llamar al Consejo.

                    Pero Nilo no llamó. El bosque lo oyó llegar.

                    A medida que avanzaba, las raíces se apartaban como si lo reconocieran. Las hojas caían más lentas. El aire se espesaba de historia.

                    Al centro del Claro Ancestral, los árboles más viejos lo esperaban. Algunos no hablaban desde hacía siglos. Otros solo lo hacían en los sueños de quienes aún recordaban cómo escuchar.

                    Nilo se arrodilló sin saber si debía hablar. No hizo falta.

                    Uno de los árboles, el de corteza negra con vetas azuladas, dejó caer una flor seca.

                    "Lo que viste no es un error."

                    —¿Quién era? —preguntó Nilo, con la voz pequeña, como si pudiera romper algo solo por nombrarlo.

                    "Umbra."

                    Un temblor recorrió las ramas. No de viento. De reconocimiento.

                    "Fue semilla. Fue luz. Luego, sombra."

                    —¿Y ahora?

                    Silencio.

                    Luego, otro árbol —uno que parecía tallado por el tiempo mismo— dejó caer un fruto seco, que se abrió en el suelo con un crujido hueco.

                    "Ahora... es olvido. Pero no del todo."

                    Nilo sintió que una historia entera se desplegaba en su mente. Una que aún no podía comprender del todo. Pero una frase se clavó en su interior:

                    "Lo que no se recuerda, se repite."

                    Sabía lo que tenía que hacer.

                    No luchar. No huir. No juzgar.

                    Recordar.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Eco de Umbra">Buscarlo en la zona marchita</button>
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

export default ConsejoDeCortezaPassage;
