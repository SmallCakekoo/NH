// Script para listar todos los pasajes disponibles y verificar la correcta nomenclatura

// Importar módulos necesarios
const fs = require("fs");
const path = require("path");

// Ruta a la carpeta de pasajes
const PAGES_DIR = path.join(__dirname, "../pages");

// Colores para la consola
const COLORS = {
  RESET: "\x1b[0m",
  RED: "\x1b[31m",
  GREEN: "\x1b[32m",
  YELLOW: "\x1b[33m",
  BLUE: "\x1b[34m",
  MAGENTA: "\x1b[35m",
  CYAN: "\x1b[36m",
};

// Función principal
function listPassages() {
  console.log(
    `${COLORS.CYAN}=== PASAJES DISPONIBLES EN ${PAGES_DIR} ===${COLORS.RESET}`
  );

  try {
    // Obtener lista de archivos en la carpeta pages
    const files = fs
      .readdirSync(PAGES_DIR)
      .filter((file) => file.endsWith(".js"))
      .filter((file) => !file.startsWith("Main")); // Excluir MainPage

    console.log(
      `${COLORS.GREEN}Total de pasajes encontrados: ${files.length}${COLORS.RESET}`
    );
    console.log("");

    // Mapeo de nombres kebab-case a PascalCase con manejo de acentos
    const specialCharsMap = {
      a: "á",
      e: "é",
      i: "í",
      o: "ó",
      u: "ú",
      n: "ñ",
    };

    // Verificar cada archivo
    files.forEach((file) => {
      const baseName = path.basename(file, ".js");

      // Verificar que termine en "Passage"
      const isPassageSuffix = baseName.endsWith("Passage");

      // Extraer el nombre base sin "Passage"
      const baseNameWithoutSuffix = isPassageSuffix
        ? baseName.slice(0, -7)
        : baseName;

      // Convertir a kebab-case para usar en el HTML
      let kebabCase = baseNameWithoutSuffix
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");

      // Agregar el sufijo "-passage"
      kebabCase = `${kebabCase}-passage`;

      // Verificar posibles problemas con acentos
      let hasAccents = false;
      for (const char of baseNameWithoutSuffix) {
        if (char.normalize("NFD").length > 1) {
          hasAccents = true;
          break;
        }
      }

      // Mostrar la información
      console.log(`${COLORS.BLUE}Archivo: ${COLORS.RESET}${file}`);
      console.log(
        `${COLORS.BLUE}Nombre component: ${COLORS.RESET}${kebabCase}`
      );

      if (hasAccents) {
        console.log(
          `${COLORS.YELLOW}⚠️ Contiene acentos o caracteres especiales${COLORS.RESET}`
        );

        // Mostrar el mapeo necesario para index.js
        const kebabWithoutPassage = kebabCase.replace(/-passage$/, "");
        console.log(
          `${COLORS.MAGENTA}Agregar al mapeo: "${kebabWithoutPassage}": "${baseNameWithoutSuffix}",${COLORS.RESET}`
        );
      }

      console.log("");
    });

    console.log(`${COLORS.CYAN}=== FIN DEL LISTADO ===${COLORS.RESET}`);
  } catch (error) {
    console.error(
      `${COLORS.RED}Error al leer los archivos de pasajes:${COLORS.RESET}`,
      error
    );
  }
}

// Ejecutar la función
listPassages();
