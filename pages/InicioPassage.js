class InicioPassage extends HTMLElement {
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
                    El rocío de la mañana aún se aferraba a las hojas cuando Nilo seguía enredado en sueños. Su cuerpo diminuto, hecho de bruma y curiosidad, descansaba en la raíz tibia de un ceibo viejo.

                    Fue Luma quien lo despertó, como casi todos los días.

                    —¡Nilo! ¡Despierta, gotita dormilona! —canturreó, mientras le daba un golpecito suave con una de su cipselas.

                    Nilo murmuró algo ininteligible y rodó hacia un lado, cayendo de su lecho natural con un leve plof. Una hojita quedó pegada en su cara, como un bigote improvisado. Luma soltó una risa breve.

                    —Siempre igual. Soñando con aventuras y tropezando con la realidad —dijo con dulzura y un toque de picardía.

                    —No es mi culpa si el mundo se empeña en poner cosas donde piso —respondió él, medio dormido, medio sonriendo mientras se ponía en pie.

                    Ella lo observó un momento más. Había algo entrañable en esa torpeza suya, algo que la hacía quedarse un rato más cada mañana.

                    —Vamos al bosque. Hay algo raro hoy. . . el aire huele distinto. Y vi una luciérnaga nueva —dijo, señalando una luz a lo lejos.

                    Nilo se desperezó como pudo, dio un salto breve y —casi como era de costumbre— por poco pierde el equilibrio. Afortunadamente, esta vez se mantuvo en pie.

                    —Perfecto. Ya estoy listo —dijo, sacudiéndose las hojas con dignidad prestada.

                    Y así, juntos, siguieron el sendero que aún no sabían que cambiaría todo.

                    Aquel día no fue distinto. . . hasta que lo fue.

                    Siguiendo aquella luciérnaga extraña, ambos se desviaron del camino habitual. La niebla se volvió espesa, pero no amenazante. Fue entonces cuando lo encontraron: un claro en el corazón del bosque. El aire allí era distinto, como si los árboles respiraran recuerdos.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Claro del Bosque">Explorar el bosque</button>
                    <button class="option-button" data-target="Claro del Bosque Dudoso">Dudar antes de seguirla</button>
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

export default InicioPassage;
