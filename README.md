# Aqua Anima

Historia interactiva desarrollada con Web Components.

## Optimización de rendimiento

Si experimentas problemas de rendimiento (lentitud o carga lenta), sigue estos pasos para optimizar la aplicación:

### 1. Instalar dependencias

```bash
npm install
```

### 2. Optimizar imágenes

Este paso reducirá considerablemente el tamaño de las imágenes sin pérdida notable de calidad:

```bash
npm run optimize-images
```

Las imágenes optimizadas se guardarán en `assets/images/optimized/`. Para usarlas, actualiza las referencias en el código.

### 3. Actualizar referencias a imágenes

Después de optimizar, debes actualizar las rutas en el código para usar las imágenes optimizadas. Por ejemplo:

```javascript
// Antes
img.src = "assets/images/PS1.png";

// Después
img.src = "assets/images/optimized/PS1.webp";
```

### 4. Modificaciones realizadas para mejorar rendimiento

Se han aplicado las siguientes optimizaciones:

1. **Carga dinámica de componentes**: Los pasajes ahora se cargan bajo demanda en lugar de todos al inicio.
2. **Lazy loading de imágenes**: Las imágenes se cargan solo cuando son necesarias.
3. **Optimización de imágenes**: Reducción de tamaño y conversión a formatos más eficientes (WebP).
4. **Eliminación de animaciones costosas**: Se han eliminado animaciones CSS continuas.

## Ejecutar en desarrollo

```bash
npm run dev
```

Esto iniciará un servidor local para desarrollo.

## Solución de problemas comunes

### Error al cargar pasajes con acentos

Si tienes errores como:

```
Error al cargar el pasaje la-ultima-esperanza-passage: TypeError: Failed to fetch dynamically imported module
```

Esto ocurre por problemas con los acentos. Hemos implementado una solución con un mapeo de nombres especiales para manejar los caracteres acentuados.

Para verificar y actualizar el mapeo de nombres, ejecuta:

```bash
node scripts/list-passages.js
```

Este script te mostrará todos los pasajes que tienen caracteres especiales y te indicará el mapeo correcto que debes añadir a la función `loadPassage` en `index.js`.

### Imágenes no cargan

- Verifica que las rutas sean correctas. Abre la consola del navegador y ejecuta:

  ```javascript
  debugTools.checkFilePaths();
  ```

- Si estás usando imágenes optimizadas, asegúrate de que estén correctamente ubicadas en `assets/images/optimized/`.

### Rendimiento sigue lento

- Abre la consola del navegador y ejecuta:

  ```javascript
  debugTools.showPerformanceInfo();
  ```

- Considera reducir más la calidad de las imágenes o usar un formato más eficiente como WebP.

### Herramientas de depuración

Hemos incluido varias herramientas para ayudar en la depuración:

- **debugTools.listCustomElements()**: Muestra todos los componentes personalizados registrados.
- **debugTools.checkFilePaths()**: Verifica si las rutas de las imágenes son correctas.
- **debugTools.showPerformanceInfo()**: Muestra métricas de rendimiento.

Estas herramientas están disponibles en la consola del navegador.
