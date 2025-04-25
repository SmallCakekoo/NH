// Script para optimizar imágenes utilizando sharp
// Debes instalar sharp primero con: npm install sharp

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "../assets/images");
const OPTIMIZED_DIR = path.join(__dirname, "../assets/images/optimized");

// Crear el directorio optimized si no existe
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

// Configuraciones para diferentes tipos de imágenes
const CONFIG = {
  portada: {
    width: 1200,
    quality: 80,
    format: "jpeg",
    files: ["Portada.jpg"],
  },
  background: {
    width: 1024,
    quality: 60,
    format: "webp",
    files: ["BG.png"],
  },
  passages: {
    width: 800,
    quality: 75,
    format: "webp",
    files: Array.from({ length: 39 }, (_, i) => `PS${i + 1}.png`),
  },
  characters: {
    width: 600,
    quality: 85,
    format: "webp",
    files: ["NILO.png", "LUMA.png", "UMBRA.png"],
  },
  ui: {
    width: 200,
    quality: 90,
    format: "webp",
    files: [
      "Comenzar.png",
      "Personajes.png",
      "FondoBTN.png",
      "Mute.png",
      "Unmute.png",
    ],
  },
};

async function optimizeImages() {
  console.log("Iniciando optimización de imágenes...");

  for (const [category, config] of Object.entries(CONFIG)) {
    console.log(`\nOptimizando categoría: ${category}`);

    for (const file of config.files) {
      const inputPath = path.join(IMAGES_DIR, file);

      // Verificar si el archivo existe
      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️ Archivo no encontrado: ${file}`);
        continue;
      }

      // Crear nombre para el archivo optimizado
      let outputFileName =
        path.basename(file, path.extname(file)) + "." + config.format;
      const outputPath = path.join(OPTIMIZED_DIR, outputFileName);

      try {
        // Optimizar la imagen
        console.log(`Optimizando: ${file}`);

        let sharpInstance = sharp(inputPath).resize({
          width: config.width,
          withoutEnlargement: true,
        });

        if (config.format === "jpeg") {
          await sharpInstance
            .jpeg({ quality: config.quality })
            .toFile(outputPath);
        } else if (config.format === "webp") {
          await sharpInstance
            .webp({ quality: config.quality })
            .toFile(outputPath);
        } else if (config.format === "png") {
          await sharpInstance
            .png({ quality: config.quality })
            .toFile(outputPath);
        }

        // Obtener estadísticas de tamaño
        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const reduction = (
          (1 - outputStats.size / inputStats.size) *
          100
        ).toFixed(2);

        console.log(`✅ ${file} → ${outputFileName}`);
        console.log(
          `   Tamaño original: ${(inputStats.size / 1024).toFixed(2)} KB`
        );
        console.log(
          `   Tamaño optimizado: ${(outputStats.size / 1024).toFixed(2)} KB`
        );
        console.log(`   Reducción: ${reduction}%`);
      } catch (error) {
        console.error(`❌ Error al optimizar ${file}:`, error.message);
      }
    }
  }

  console.log("\n✨ Proceso de optimización finalizado");
  console.log(`📁 Imágenes optimizadas guardadas en: ${OPTIMIZED_DIR}`);
}

optimizeImages().catch((err) => {
  console.error("Error en el proceso de optimización:", err);
  process.exit(1);
});
