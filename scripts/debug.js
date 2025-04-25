// Script para ayudar con la depuración del proyecto

// Función para listar todos los componentes personalizados registrados
function listCustomElements() {
  console.log("=== COMPONENTES PERSONALIZADOS REGISTRADOS ===");

  // Lista todos los elementos personalizados definidos
  const definedElements = Object.keys(window.customElements.registry);
  console.log(`Total de componentes: ${definedElements.length}`);

  definedElements.forEach((element) => {
    console.log(`- ${element}`);
  });

  console.log("=============================================");
}

// Función para comprobar si las rutas de archivos son correctas
function checkFilePaths() {
  console.log("=== COMPROBANDO RUTAS DE ARCHIVOS IMPORTANTES ===");

  const filesToCheck = [
    "assets/images/Portada.jpg",
    "assets/images/Comenzar.png",
    "assets/images/Personajes.png",
    "assets/images/PS1.png",
  ];

  filesToCheck.forEach((file) => {
    const img = new Image();
    img.onload = () => {
      console.log(
        `✅ ${file} - Cargado correctamente (${img.width}x${img.height})`
      );
    };
    img.onerror = () => {
      console.error(
        `❌ ${file} - ERROR: Archivo no encontrado o no se puede cargar`
      );
    };
    img.src = file;
  });

  console.log("============================================");
}

// Función para monitorear la carga y cambio de pasajes
function monitorPassageLoading() {
  console.log("=== MONITOREO DE CARGA DE PASAJES INICIADO ===");

  document.addEventListener("passage-requested", (e) => {
    console.log(`🔄 Solicitando carga del pasaje: ${e.detail.passageName}`);
  });

  document.addEventListener("passage-loaded", (e) => {
    console.log(`✅ Pasaje cargado correctamente: ${e.detail.passageName}`);
  });

  document.addEventListener("passage-change", (e) => {
    console.log(`🔀 Navegando a pasaje: ${e.detail.target}`);
  });
}

// Función que muestra información sobre el rendimiento
function showPerformanceInfo() {
  console.log("=== INFORMACIÓN DE RENDIMIENTO ===");

  // Métricas de tiempo de carga
  const timing = window.performance.timing;
  const loadTime = timing.loadEventEnd - timing.navigationStart;
  const domReadyTime = timing.domContentLoadedEventEnd - timing.navigationStart;

  console.log(`Tiempo total de carga: ${loadTime} ms`);
  console.log(`Tiempo DOM Ready: ${domReadyTime} ms`);

  // Uso de memoria (solo Chrome)
  if (window.performance.memory) {
    const memory = window.performance.memory;
    console.log(
      `Límite de heap: ${Math.round(memory.jsHeapSizeLimit / (1024 * 1024))} MB`
    );
    console.log(
      `Tamaño total de heap: ${Math.round(
        memory.totalJSHeapSize / (1024 * 1024)
      )} MB`
    );
    console.log(
      `Tamaño usado de heap: ${Math.round(
        memory.usedJSHeapSize / (1024 * 1024)
      )} MB`
    );
  }
}

// Iniciar todas las funciones de diagnóstico cuando el DOM esté listo
window.addEventListener("DOMContentLoaded", () => {
  console.log("=== INICIANDO DIAGNÓSTICO ===");
  console.log("Hora actual: " + new Date().toLocaleTimeString());

  // Esperar a que todos los componentes se hayan cargado
  setTimeout(() => {
    listCustomElements();
    checkFilePaths();
    monitorPassageLoading();
    showPerformanceInfo();

    console.log("✨ Diagnóstico completado");
    console.log("Para más información, revisa NH/README.md");
  }, 1000);
});

// Exportar las funciones para usar en la consola
window.debugTools = {
  listCustomElements,
  checkFilePaths,
  showPerformanceInfo,
};
