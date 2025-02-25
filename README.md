# 🏡 Valoración de Alquileres  

Este es un proyecto personal que ayuda a evaluar un alquiler basándose en un estudio estadístico previo. Utiliza distintos parámetros para calcular **cómo de raro es un alquiler** y **en qué percentil se encuentra** dentro del conjunto de datos analizados.  

⚠️ **Nota:** Este proyecto está pensado exclusivamente para uso personal mío y de mi pareja.  

## 🚀 ¿Cómo Funciona?  

1. **Introduce los valores** de un alquiler (precio, tamaño y distancia a puntos clave).  
2. **El sistema compara los valores** con la media y los distribuye en un percentil.  
3. **Se muestra el percentil**, que indica el porcentaje de alquileres que tienen mejores condiciones.  

## 🛠️ Tecnologías Usadas  

- **HTML5** (estructura básica)  
- **CSS** (estilos visuales)  
- **JavaScript** (cálculo de percentiles)  

## 📌 Ejemplo de Uso  

| Precio (€) | Tamaño (m²) | Distancia (km) | Percentil (alquileres mejores) |
|------------|------------|----------------|-------------------------------|
| 800        | 70         | 2              | Superado solo por el 2% |
| 1200       | 50         | 8              | Superado por el 85% |
| 950        | 65         | 5              | Superado por el 35% |

## 🎯 Criterios de Evaluación  

- **Precio:** Se compara con la media (1075€).  
- **Tamaño:** Se compara con la media (63 m²).  
- **Distancia:** Se compara con la media (5 km).  
- **Percentil:** Indica cuántos alquileres tienen mejores condiciones.  

## 🏠 ¿Cómo Probarlo?  

1. Clona este repositorio:  
   ```bash
   git clone https://github.com/tu-usuario/valoracion-alquileres.git
2. Abre el archivo index.html en un navegador.
3. Ingresa los valores y haz clic en "Calcular".

## 📌 Personalización

Si quieres modificar los valores de referencia (media de precio, tamaño, distancia), edita el archivo script.js y cambia las variables dentro de la función calcularPercentil().

## 🌍 ¿Habrá una Versión Online?

Este proyecto es local, pero podría subirse a GitHub Pages en el futuro.