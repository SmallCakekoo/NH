class InicioPassage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.imageLoaded = false;
  }

  connectedCallback() {
    this.renderSkeleton();
    this.loadImage();
  }

  renderSkeleton() {
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
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .image-container {
                    position: relative;
                    width: 100%;
                    max-width: 600px;
                    height: 300px;
                    margin: 0 auto 20px;
                    background-color: rgba(1, 19, 48, 0.5);
                    border-radius: 8px;
                    z-index: 1;
                }

                .loading-spinner {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 40px;
                    height: 40px;
                    border: 4px solid rgba(7, 192, 213, 0.3);
                    border-radius: 50%;
                    border-top-color: #07c0d5;
                    animation: spin 1s ease-in-out infinite;
                }

                @keyframes spin {
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                
                .passage-image {
                    width: 100%;
                    max-width: 600px;
                    height: auto;
                    border-radius: 8px;
                    display: none;
                    object-fit: contain;
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
                    z-index: 2;
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
                    z-index: -1;
                }

                .option-button {
                    padding: 15px 30px;
                    font-size: 1.4em;
                    background-image: url('assets/images/FondoBTN.png');
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

                .options-container {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    margin-top: 30px;
                    z-index: 3;
                    position: relative;
                }

                /* Ajustes responsive */
                @media screen and (max-width: 768px) {
                    .image-container {
                        height: 200px;
                    }
                    
                    .options-container {
                        flex-direction: column;
                        align-items: center;
                        gap: 15px;
                    }
                    
                    .option-button {
                        width: 80%;
                        min-width: auto;
                        font-size: 1.2em;
                    }
                }
            </style>

            <div class="passage-container">
                <div class="image-container">
                    <div class="loading-spinner"></div>
                    <img class="passage-image" alt="Escena del pasaje">
                </div>
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

  loadImage() {
    const img = new Image();
    img.onload = () => {
      const passageImage = this.shadowRoot.querySelector(".passage-image");
      const loadingSpinner = this.shadowRoot.querySelector(".loading-spinner");
      const imageContainer = this.shadowRoot.querySelector(".image-container");

      if (passageImage) {
        passageImage.src = img.src;
        passageImage.style.display = "block";

        // Ajustar altura del contenedor a la altura real de la imagen
        if (imageContainer && img.height > 0) {
          imageContainer.style.height = "auto";
          imageContainer.style.minHeight = "300px";
        }
      }

      if (loadingSpinner) {
        loadingSpinner.style.display = "none";
      }

      this.imageLoaded = true;
      this.setupEventListeners();
    };

    img.onerror = () => {
      console.error("Error al cargar la imagen del pasaje");
      const loadingSpinner = this.shadowRoot.querySelector(".loading-spinner");
      if (loadingSpinner) {
        loadingSpinner.style.display = "none";
      }

      this.setupEventListeners();
    };

    img.src = "assets/images/PS1.png";
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
