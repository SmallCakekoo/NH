import AppContainer from "./components/AppContainer.js";
import MainPage from "./pages/MainPage.js";
import PersonajesPassage from "./pages/PersonajesPassage.js";

// Registrar los componentes principales
customElements.define("app-container", AppContainer);
customElements.define("main-page", MainPage);
customElements.define("personajes-passage", PersonajesPassage);

// Objeto para almacenar referencias a los módulos cargados
const loadedModules = {};

// Función para cargar dinámicamente un pasaje cuando sea necesario
async function loadPassage(passageName) {
  // Verificar explícitamente si el componente ya está registrado
  if (customElements.get(passageName)) {
    console.log(
      `El componente ${passageName} ya está registrado, omitiendo carga.`
    );
    return;
  }

  // Evitar intentos repetidos de carga para el mismo pasaje
  // usando una marca de que está en proceso de carga
  if (window._loadingPassages && window._loadingPassages[passageName]) {
    console.log(
      `El componente ${passageName} ya está en proceso de carga, omitiendo duplicado.`
    );
    return;
  }

  // Marcar este pasaje como "en proceso de carga"
  if (!window._loadingPassages) window._loadingPassages = {};
  window._loadingPassages[passageName] = true;

  try {
    // Quitar el sufijo "-passage" si existe
    const baseName = passageName.endsWith("-passage")
      ? passageName.slice(0, -8)
      : passageName;

    // Mapeo de nombres especiales con acentos
    const specialNameMapping = {
      "ultimo-encuentro": "ÚltimoEncuentro",
      "último-encuentro": "ÚltimoEncuentro", // Agregar ambas variantes
      "la-ultima-esperanza": "LaÚltimaEsperanza",
      "la-última-esperanza": "LaÚltimaEsperanza", // Agregar ambas variantes
      "raiz-incierta": "RaízIncierta",
      "raíz-incierta": "RaízIncierta", // Agregar ambas variantes
      "raiz-de-sombra": "RaízDeSombra",
      "raíz-de-sombra": "RaízDeSombra", // Agregar ambas variantes
      "raiz-compartida": "RaízCompartida",
      "raíz-compartida": "RaízCompartida", // Agregar ambas variantes
      "el-lugar-donde-empezo-el-olvido": "ElLugarDondeEmpezóElOlvido",
      "el-lugar-donde-empezó-el-olvido": "ElLugarDondeEmpezóElOlvido", // Agregar ambas variantes
      "el-guardian-de-las-memorias": "ElGuardiánDeLasMemorias",
      "el-guardián-de-las-memorias": "ElGuardiánDeLasMemorias", // Agregar ambas variantes
      "el-eco-de-una-nueva-guardiana": "ElEcoDeUnaNuevaGuardiana",
    };

    // Verificar si tenemos un mapeo especial para este pasaje
    let fileName;
    if (specialNameMapping[baseName]) {
      fileName = specialNameMapping[baseName] + "Passage";
      console.log(`Usando mapeo especial para ${baseName} → ${fileName}`);
    } else {
      // Convertir el nombre del pasaje a formato camelCase para el archivo
      fileName =
        baseName
          .replace(/-([a-z])/g, (g) => g[1].toUpperCase())
          .replace(/^[a-z]/, (g) => g.toUpperCase()) + "Passage";
    }

    // Si el módulo ya fue cargado anteriormente, usarlo
    if (loadedModules[fileName]) {
      // Verificar una vez más que el componente no esté ya registrado
      if (!customElements.get(passageName)) {
        console.log(`Usando módulo previamente cargado para ${passageName}`);
        customElements.define(passageName, loadedModules[fileName].default);
      } else {
        console.log(
          `El componente ${passageName} ya está registrado (verificación 2)`
        );
      }

      // Desmarcar como "en proceso de carga"
      if (window._loadingPassages) delete window._loadingPassages[passageName];
      return;
    }

    // Cargar el módulo dinámicamente
    console.log(`Intentando cargar: ./pages/${fileName}.js`);
    const module = await import(`./pages/${fileName}.js`);
    loadedModules[fileName] = module;

    // Registrar el elemento personalizado solo si no está registrado ya
    if (!customElements.get(passageName)) {
      customElements.define(passageName, module.default);
      console.log(`Pasaje ${passageName} cargado dinámicamente`);
    } else {
      console.log(
        `El componente ${passageName} ya está registrado (verificación 3)`
      );
    }

    // Notificar que el pasaje está listo
    document.dispatchEvent(
      new CustomEvent("passage-loaded", {
        detail: { passageName },
        bubbles: true,
      })
    );
  } catch (error) {
    console.error(`Error al cargar el pasaje ${passageName}:`, error);

    // Mostrar mensaje de error en la consola para facilitar la depuración
    console.error(
      `Revisa que el archivo exista en la carpeta pages/ y que el nombre sea correcto.`
    );
    console.error(
      `Si el pasaje tiene acentos, asegúrate de que esté incluido en el objeto specialNameMapping.`
    );
  } finally {
    // Desmarcar como "en proceso de carga" sin importar si hay error o no
    if (window._loadingPassages) delete window._loadingPassages[passageName];
  }
}

// Agregar un oyente personalizado para la carga de pasajes
document.addEventListener("passage-requested", async (event) => {
  const passageName = event.detail.passageName;
  await loadPassage(passageName);
});

// Pre-cargar pasaje de inicio para tenerlo listo
loadPassage("inicio-passage");
