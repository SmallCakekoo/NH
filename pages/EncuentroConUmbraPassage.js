class EncuentroConUmbraPassage extends HTMLElement {
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
                    La noticia llegó con la bruma.
                    Nilo regresó a la aldea y se subió a la piedra del centro de la plaza, justo donde a veces los ancianos contaban historias antiguas. Pero hoy no traía cuentos. Traía advertencias.

                    —El Claro se está marchitando... —dijo con voz temblorosa—. Las raíces se están secando, y la niebla ya no es memoria: es olvido. Si no hacemos algo, el bosque entero lo va a sentir. Incluida nuestra aldea.

                    El murmullo de los habitantes fue inmediato, como un viento inquieto:

                    —¿Cómo puedes saber eso? ¡Eres solo una gota! —dijo un viejo hongo desde el borde de la plaza.
                    —Quizás solo es parte del ciclo. El bosque siempre cambia —murmuró una semilla anciana, mirando al cielo.
                    —¿Y si está diciendo la verdad? ¡¿Y si el olvido se extiende?! —gritó un joven espino, más asustado que convencido.
                    —¡Entonces que vaya él! Si el Claro lo eligió, que él lo arregle —soltó una voz entre la multitud, con tono entre cínico y resignado.

                    Nilo apretó los puños. No buscaba gloria, ni culpa. Solo quería que escucharan. Pero una a una, las figuras se dispersaron como niebla al viento, con más dudas que respuestas.

                    Todos se fueron.
                    Todos, menos una.

                    Luma seguía ahí. No necesitó entender todo.
                    Solo vio el rostro de Nilo, y supo que no podía dejarlo ir solo.

                    —Si tú crees que se puede... entonces vamos a intentarlo. —dijo, acercándose sin miedo.

                    Y así, bajo un cielo sin estrellas, Nilo durmió por última vez entre la hierba del Claro.
                    La niebla lo envolvía como una despedida suave.

                    Al día siguiente, solo quedaría una elección de no retorno.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Deterioro en la aldea">Buscar respuestas</button>
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

export default EncuentroConUmbraPassage;
