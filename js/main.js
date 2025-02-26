function dibujar() {
    const dibujos = [
        (ctx) => ctx.fillRect(10, 10, 100, 50), // Rectángulo relleno
        (ctx) => { ctx.strokeStyle = "cyan"; ctx.lineWidth = 4; ctx.strokeRect(10, 10, 100, 50); }, // Rectángulo con borde
        (ctx) => { ctx.beginPath(); ctx.moveTo(75, 10); ctx.lineTo(130, 80); ctx.lineTo(20, 80); ctx.closePath(); ctx.fillStyle ="lime"; ctx.fill(); }, // Triángulo
        (ctx) => { ctx.beginPath(); ctx.arc(75, 50, 30, 0, Math.PI * 2); ctx.strokeStyle = "orange"; ctx.stroke(); }, // Círculo
        (ctx) => { ctx.beginPath(); ctx.arc(75, 50, 30, 0, Math.PI); ctx.stroke(); }, // Arco (sonrisa)
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 10); ctx.lineTo(140, 90); ctx.stroke(); }, // Línea diagonal
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 80); ctx.quadraticCurveTo(75, 10, 140, 80); ctx.stroke(); }, // Curva cuadrática
        (ctx) => { ctx.beginPath(); ctx.moveTo(10, 80); ctx.bezierCurveTo(40, 10, 110, 10, 140, 80); ctx.stroke(); }, // Curva Bézier
        (ctx) => { ctx.font = "16px Arial"; ctx.fillText("Programador:", 10, 50); ctx.fillText("Cristian", 10, 80); }, // Texto
        (ctx) => {ctx.beginPath();
            ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
            ctx.moveTo(110, 75);
            ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
            ctx.moveTo(65, 65);
            ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
            ctx.moveTo(95, 65);
            ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
            ctx.stroke();}, // Cara sonriente
        (ctx) => {
                roundedRect(ctx, 19, 19, 170, 155, 9);
                roundedRect(ctx, 53, 53, 49, 33, 10);
                roundedRect(ctx, 53, 119, 49, 16, 6);
                roundedRect(ctx, 135, 53, 49, 33, 10);
                roundedRect(ctx, 135, 119, 25, 49, 10);
            
                ctx.beginPath();
                ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
                ctx.lineTo(31, 37);
                ctx.fill();
            
                for (let i = 0; i < 8; i++) {
                  ctx.fillRect(51 + i * 16, 35, 4, 4);
                }
            
                for (i = 0; i < 6; i++) {
                  ctx.fillRect(115, 51 + i * 16, 4, 4);
                }
            
                for (i = 0; i < 8; i++) {
                  ctx.fillRect(51 + i * 16, 99, 4, 4);
                }
            
                ctx.beginPath();
                ctx.moveTo(83, 116);
                ctx.lineTo(83, 102);
                ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
                ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
                ctx.lineTo(111, 116);
                ctx.lineTo(106.333, 111.333);
                ctx.lineTo(101.666, 116);
                ctx.lineTo(97, 111.333);
                ctx.lineTo(92.333, 116);
                ctx.lineTo(87.666, 111.333);
                ctx.lineTo(83, 116);
                ctx.fill();
            
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.moveTo(91, 96);
                ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
                ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
                ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
                ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
                ctx.moveTo(103, 96);
                ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
                ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
                ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
                ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
                ctx.fill();
            
                ctx.fillStyle = "black";
                ctx.beginPath();
                ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
                ctx.fill();
            
                ctx.beginPath();
                ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
                ctx.fill();
            // Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.
            
            function roundedRect(ctx, x, y, width, height, radius) {
              ctx.beginPath();
              ctx.moveTo(x, y + radius);
              ctx.arcTo(x, y + height, x + radius, y + height, radius);
              ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
              ctx.arcTo(x + width, y, x + width - radius, y, radius);
              ctx.arcTo(x, y, x, y + radius, radius);
              ctx.stroke();
            }},// Pacman
        (ctx) => { let gradient = ctx.createLinearGradient(10, 50, 140, 50); gradient.addColorStop(0, "blue"); gradient.addColorStop(1, "red"); ctx.fillStyle = gradient; ctx.fillRect(10, 30, 130, 40); } // Gradiente
    ];

    dibujos.forEach((dibujo, i) => {
        const canvas = document.getElementById(`canvas${i + 1}`);
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                dibujo(ctx);
            }
        }
    });
}



window.onload = function () {
    dibujar();
    dibujarImagenes();
};
