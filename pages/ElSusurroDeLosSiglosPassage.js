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
                    text-align: left;
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
