class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.currentPassage = "main-page";
    this.audio = new Audio("assets/music/Whispers of the Forest.mp3");
    this.audio.loop = true;
    this.audio.volume = 0.3;
    this.isMuted = false;
    this.boundPassageChangeHandler = this.handlePassageChange.bind(this);
    this.boundBackButtonHandler = this.handleBackButton.bind(this);
    this.boundAudioControlHandler = this.handleAudioControl.bind(this);
    this.boundVolumeControlHandler = this.handleVolumeControl.bind(this);
    this.render();
    this.setupEventListeners();
    this.initializeAudio();
  }

  async initializeAudio() {
    try {
      await this.audio.load();

      try {
        await this.audio.play();
        console.log("Audio iniciado correctamente");
      } catch (autoPlayError) {
        console.log(
          "No se pudo reproducir automáticamente, esperando interacción del usuario"
        );

        const audioMessage = document.createElement("div");
        audioMessage.style.cssText = `
          position: fixed;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          z-index: 1000;
          font-size: 14px;
        `;
        audioMessage.textContent =
          "Haz clic en cualquier parte para iniciar la música";
        document.body.appendChild(audioMessage);

        const startAudio = async () => {
          try {
            await this.audio.play();
            console.log("Audio iniciado después de interacción del usuario");
            audioMessage.remove();

            document.removeEventListener("click", startAudio);
            document.removeEventListener("keydown", startAudio);
          } catch (error) {
            console.log(
              "Error al reproducir audio después de interacción:",
              error
            );
          }
        };

        document.addEventListener("click", startAudio, { once: true });
        document.addEventListener("keydown", startAudio, { once: true });
      }
    } catch (error) {
      console.log("Error al inicializar el audio:", error);
    }
  }

  render() {
    this.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: var(--font-main);
        }
        
        .story-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          position: relative;
        }

        .back-button {
          position: fixed;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          z-index: 1000;
          font-size: 14px;
          transition: background-color 0.3s;
        }

        .back-button:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .back-button.hidden {
          display: none;
        }

        .audio-controls {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .audio-control {
          cursor: pointer;
          width: 40px;
          height: 40px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
        }

        .audio-control.muted {
          background-image: url('assets/images/mute.png');
        }

        .audio-control.unmuted {
          background-image: url('assets/images/unmute.png');
        }

        .volume-control {
          width: 5px;
          height: 100px;
          background: #ccc;
          border-radius: 5px;
          cursor: pointer;
          position: relative;
        }

        .volume-level {
          width: 100%;
          background: #4CAF50;
          border-radius: 5px;
          position: absolute;
          bottom: 0;
          height: ${this.audio.volume * 100}%;
        }
      </style>
      
      <div class="story-container">
        <div class="back-button ${
          this.currentPassage === "main-page" ? "hidden" : ""
        }" id="backButton">← Volver al inicio</div>
        <${this.currentPassage}></${this.currentPassage}>
      </div>
      <div class="audio-controls">
        <div class="audio-control ${
          this.isMuted ? "muted" : "unmuted"
        }" id="audioControl"></div>
        <div class="volume-control" id="volumeControl">
          <div class="volume-level"></div>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    this.removeEventListener("passage-change", this.boundPassageChangeHandler);

    this.addEventListener("passage-change", this.boundPassageChangeHandler);

    const backButton = this.querySelector("#backButton");
    if (backButton) {
      backButton.removeEventListener("click", this.boundBackButtonHandler);
      backButton.addEventListener("click", this.boundBackButtonHandler);
    }

    const audioControl = this.querySelector("#audioControl");
    if (audioControl) {
      audioControl.removeEventListener("click", this.boundAudioControlHandler);
      audioControl.addEventListener("click", this.boundAudioControlHandler);
    }

    const volumeControl = this.querySelector("#volumeControl");
    if (volumeControl) {
      volumeControl.removeEventListener(
        "click",
        this.boundVolumeControlHandler
      );
      volumeControl.addEventListener("click", this.boundVolumeControlHandler);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.audio.pause();
      } else {
        this.audio
          .play()
          .catch((error) => console.log("Error al reanudar audio:", error));
      }
    });
  }

  handlePassageChange(event) {
    this.navigateToPassage(event.detail.target);
  }

  handleBackButton() {
    this.currentPassage = "main-page";
    this.render();
    this.setupEventListeners();
    window.scrollTo(0, 0);
  }

  handleAudioControl(e) {
    e.stopPropagation();
    this.toggleMute();
  }

  handleVolumeControl(e) {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const y = rect.bottom - e.clientY;
    const volume = y / rect.height;
    this.setVolume(volume);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    this.audio.muted = this.isMuted;
    const audioControl = this.querySelector("#audioControl");
    if (audioControl) {
      audioControl.className = `audio-control ${
        this.isMuted ? "muted" : "unmuted"
      }`;
    }
  }

  setVolume(volume) {
    this.audio.volume = Math.max(0, Math.min(1, volume));
    const volumeLevel = this.querySelector(".volume-level");
    if (volumeLevel) {
      volumeLevel.style.height = `${this.audio.volume * 100}%`;
    }
  }

  navigateToPassage(target) {
    if (target === "FIN") {
      this.currentPassage = "fin-passage";
    } else if (target === "Personajes") {
      this.currentPassage = "personajes-passage";
    } else {
      const targetElement = this.formatPassageName(target);
      this.currentPassage = targetElement;
    }
    this.render();
    this.setupEventListeners();
    window.scrollTo(0, 0);
  }

  formatPassageName(name) {
    return (
      name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, "-") + "-passage"
    );
  }
}

export default AppContainer;
