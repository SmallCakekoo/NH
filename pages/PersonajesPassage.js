class PersonajesPassage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: var(--font-main);
          color: #00ecd6; 
          min-height: 100vh;
          padding: 20px;
        }
        
        .characters-container {
          max-width: 1000px;
          margin: 0 auto;
          background-color: rgba(1, 19, 48, 0.9);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 236, 214, 0.4);
          border: 4px solid #07c0d5;
          border-image: repeating-linear-gradient(
            45deg,
            #07c0d5,
            #07c0d5 10px,
            #00ecd6 10px,
            #00ecd6 20px
          ) 4;
        }
        
        h1 {
          text-align: center;
          margin-bottom: 40px;
          color: #00ecd6;
          font-size: 2.5em;
          text-shadow: 0 0 10px rgba(0, 236, 214, 0.7);
        }
        
        .characters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        
        .character-card {
          background-color: #011330;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 
            inset 0 0 10px rgba(0, 236, 214, 0.3),
            0 0 15px rgba(0, 236, 214, 0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 2px solid #07c0d5;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        
        .character-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(0, 236, 214, 0.1) 2px,
            rgba(0, 236, 214, 0.1) 4px
          );
          pointer-events: none;
          z-index: 0;
          border-radius: 8px;
        }
        
        .character-card:hover {
          transform: translateY(-5px);
          box-shadow: 
            inset 0 0 15px rgba(0, 236, 214, 0.5),
            0 0 30px rgba(0, 236, 214, 0.7);
        }
        
        .character-image {
          width: 100%;
          height: 300px;
          object-fit: contain;
          background-color: #e9bd7d;
          padding: 10px 0;
          border-bottom: 2px solid #07c0d5;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        
        .character-info {
          padding: 20px;
          position: relative;
          z-index: 1;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .character-name {
          font-size: 1.8em;
          color: #00ecd6;
          text-shadow: 0 0 5px #07c0d5;
          position: relative;
          z-index: 1;
        }
        
        .character-description {
          line-height: 1.6;
          color: #00ecd6;
          position: relative;
          z-index: 1;
          flex-grow: 1;
        }
        
        .character-description p {
          margin: 8px 0;
        }

        h1{
          margin: 0px;
          padding: 0px;
          padding-bottom: 20px;
          font-family: var(--font-buttons);
          font-size: 3.5em;
        }
        h2{
           font-family: var(--font-buttons);
        }

        .character-description strong {
          color: #07c0d5;
          text-shadow: 0 0 3px rgba(0, 236, 214, 0.5);
          font-weight: bold;
        }
        
        @media screen and (max-width: 768px) {
          .characters-grid {
            grid-template-columns: 1fr;
          }
          
          h1 {
            font-size: 2em;
          }
        }
      </style>
      
      <div class="characters-container">
        <h1>Personajes</h1>
        
        <div class="characters-grid">
          <div class="character-card">
            <img src="assets/images/LUMA.webp" alt="Luma" class="character-image">
            <div class="character-info">
              <h2 class="character-name">LUMA – La Semilla de Diente de León</h2>
              <div class="character-description">
                <p><strong>Especie:</strong> Semilla de diente de león con un leve brillo natural</p>
                <p><strong>Personalidad:</strong> Alegre, empática, un poco soñadora, pero firme cuando se trata de cuidar a Nilo.</p>
                <p><strong>Relación con Nilo:</strong> Mejor amiga desde siempre. Es su cable a tierra y su memoria externa, por así decirlo.</p>
                <p><strong>Motivación:</strong> Ayudar a Nilo a encontrar su camino y proteger el bosque.</p>
                <p><strong>Curiosidades:</strong> Su cuerpo es muy liviano, lo que le permite flotar.</p>
              </div>
            </div>
          </div>
          
          <div class="character-card">
            <img src="assets/images/NILO.webp" alt="Nilo" class="character-image">
            <div class="character-info">
              <h2 class="character-name">NILO – El Guardián de la Memoria</h2>
              <div class="character-description">
                <p><strong>Especie:</strong> Gota de agua</p>
                <p><strong>Personalidad:</strong> Curioso, torpe al inicio, pero con una bondad desbordante. Le cuesta entender su rol como guardián, pero si escoges la ruta adecuada lo abraza con el tiempo.</p>
                <p><strong>Motivación:</strong> Entender su propósito. A medida que avanza, se obsesiona menos con lo externo y más con la importancia de recordar y preservar.</p>
                <p><strong>Evolución:</strong> De ingenuo e inseguro a sabio y sacrificado. Su viaje no es hacia el poder, sino hacia la comprensión.</p>
              </div>
            </div>
          </div>
          
          <div class="character-card">
            <img src="assets/images/UMBRA.webp" alt="Umbra" class="character-image">
            <div class="character-info">
              <h2 class="character-name">UMBRA – El Devorador de Recuerdos</h2>
              <div class="character-description">
                <p><strong>Especie:</strong> Semilla negra y retorcida</p>
                <p><strong>Personalidad:</strong> Oscuro, en conflicto constante. No es malvado per se, pero está consumido por su naturaleza y un pasado que no recuerda (ni quiere recordar del todo).</p>
                <p><strong>Motivación:</strong> Al principio quiere expandir la sombra y olvidar el dolor. Pero a medida que se encuentra con Nilo, duda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default PersonajesPassage;
