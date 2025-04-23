class ÚltimoEncuentroPassage extends HTMLElement {
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
                    Nilo no tuvo que decir nada.
                    Umbra ya lo sabía.

                    La presencia del pequeño guardián le erizaba las raíces, como si algo antiguo —algo que había aprendido a callar— volviera a la superficie.

                    —¿Por qué has venido? —murmuró Umbra, su voz temblaba, profunda, como si hablara a través del mismo suelo.

                    —Porque nadie merece desaparecer sin ser recordado, pero necesito que te detengas —respondió Nilo.

                    El silencio se volvió espeso.
                    Ni los hongos se movían.
                    El bosque entero parecía esperar una confesión.

                    —Yo no quería hacer daño. . .—susurró Umbra— pero tenía tanto miedo de desaparecer.
                    Así que tomé. Tomé todo lo que pude.
                    Memorias cálidas. Canciones. Risas. Hasta los nombres de los árboles.
                    Las bebí.
                    Y en su lugar. . . dejé sombra.

                    La tierra crujió. Los hongos temblaron levemente, como si revivieran el dolor.
                    Era cierto.
                    Umbra había marchitado el bosque. No por odio. Más bien, por hambre. Por vacío.

                    —Si me tocas. . . te arrastraré conmigo. No podré evitarlo. Corromperé lo que queda de ti.

                    Nilo bajó la mirada, no con miedo.
                    Con compasión. Y firmeza.

                    —No todo se perderá.

                    Umbra titubeó.
                    Por primera vez, no por culpa ni rencor…
                    Sino por duda. Por un deseo de ser otra cosa.

                    Y entonces… ocurrió.

                    Un recuerdo emergió.
                    Pero no de Umbra.

                    Era de Nilo.

                    Un destello de sol.
                    Luma, con los ojos cerrados, recibiendo una gota brillante.
                    Una memoria. Varias memorias, eran todas las memorias de la gente que Nilo alguna vez había cuidado.

                    —¿Qué has hecho? —susurró Umbra, confundido.

                    —He hecho espacio —respondió Nilo.

                    Y dio un paso más.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Epílogo">Unirse a Umbra</button>
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

customElements.define("último-encuentro-passage", ÚltimoEncuentroPassage);
