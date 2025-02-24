// 1. Obtener el elemento <canvas> del documento HTML mediante su ID.
var canvas = document.getElementById("canvas");

// 2. Obtener el contexto de renderizado en 2D del canvas.
//    - Este contexto permite dibujar formas, imágenes y gráficos en el lienzo.
var ctx = canvas.getContext("2d");

// 3. Definir el color de relleno para los dibujos siguientes.
//    - En este caso, el color se establece como "verde".
ctx.fillStyle = "rgb(0, 255, 0)";

// 4. Dibujar un rectángulo relleno con las siguientes propiedades:
//    - (100, 50)  → Posición (x, y) en píxeles dentro del canvas. 
//    - 400        → Ancho en píxeles. 
//    - 400        → Alto en píxeles.
ctx.fillRect(50, 50, 400, 400);

