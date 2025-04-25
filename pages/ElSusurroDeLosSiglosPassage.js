class ElSusurroDeLosSiglosPassage extends HTMLElement {
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
                <img class="passage-image" src="assets/images/PS6.png" alt="Escena del pasaje">
                <div class="passage-text">
                    Nilo caminaba entre los árboles, alejándose del lugar donde la imagen de la mujer de pétalos había aparecido. Sus pasos eran rápidos, deliberados, como si pudiera dejar atrás los recuerdos simplemente poniendo distancia física.

                    El zumbido en su pecho, ese que siempre lo acompañaba en el Claro, parecía haberse intensificado. Ya no era un susurro sino una exigencia que reverberaba dentro de él.

                    Se detuvo junto a un viejo roble, apoyando la frente contra su corteza rugosa.

                    —No quiero recordar —murmuró—. Si alguna vez conocí a esa mujer... si alguna vez fui parte de algo más... ya no importa.

                    El viento se agitó suavemente, trayendo consigo el aroma dulce de flores lejanas. Por un instante, le recordó a ella. A la mujer que decía no conocer.

                    Cerró los ojos con fuerza, intentando expulsar la imagen. Pero ella persistía, como un eco entre las ramas del bosque.

                    Sintió una presencia a su espalda. Al girarse, vio una cipsela solitaria flotando hacia él. Una de las que Luma había guardado. La pequeña semilla brillaba con la luz tenue del recuerdo.

                    Nilo estiró la mano instintivamente para tomarla, pero se detuvo a medio camino.

                    —Ya te dije que no.

                    La cipsela siguió flotando, inconmovible, paciente. Como si fuera consciente de que solo era cuestión de tiempo.

                    Nilo suspiró profundamente. Algo dentro de él estaba cediendo, una resistencia que se desmoronaba lentamente.

                    —¿Y si duele? —preguntó al aire—. ¿Y si recordar significa sufrir?

                    La cipsela bailó ligeramente, acercándose más a su mano extendida.

                    Había algo en ese gesto, tan sencillo, tan persistente, que lo conmovió. Tal vez no todas las memorias fueran oscuras. Tal vez algunas valieran la pena ser recuperadas.

                    Con dedos temblorosos, finalmente tomó la cipsela. Un calor suave emanó de ella, expandiéndose por su palma hasta su pecho, hasta alcanzar el zumbido que lo había acompañado durante tanto tiempo.

                    Y entonces lo entendió.

                    No era un zumbido. Era un eco. Un eco de voces, de risas, de momentos que había abandonado en algún rincón de sí mismo.

                    —Quizás... —murmuró mientras sus dedos se cerraban con cuidado alrededor de la cipsela—. Quizás pueda recordar solo un poco. Solo lo suficiente para entender.

                    La luz de la cipsela se intensificó, como respondiendo a su rendición.

                    En ese momento, Nilo supo que ya no podía seguir huyendo. Que el recuerdo, como el Claro mismo, terminaría encontrándolo.

                    Con un suspiro de resignación, dio media vuelta y comenzó a caminar de regreso hacia donde había dejado a Luma.

                    Si los recuerdos iban a perseguirlo, mejor enfrentarlos con alguien que estuviera dispuesto a guardarlos.

                    Nilo comenzó a ir más al Claro.
                </div>
                <div class="options-container">
                    <button class="option-button" data-target="Vínculo con el Claro">Investigar lo que ocurre</button>
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

export default ElSusurroDeLosSiglosPassage;
