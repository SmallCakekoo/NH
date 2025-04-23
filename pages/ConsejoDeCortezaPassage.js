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
