//Desenhar um retângulo
//context.fillRect(50, 50, 100, 100); // Retângulo desenhado com FillRect
//context.strokeRect(50, 50, 100, 100);// Retângulo desenhado com StrokeRect
// fillstyle: Cor do preenchimento
// strokeStile: Cor da linha
// lineWidth: Espessura da linha em pixels

var canvas = document.getElementById('game_alien');
var context = canvas.getContext('2d');

//Preenchimento Vermelho
//context.fillStyle = 'red';
//context.fillRect(50, 50, 100, 100);

// Contorno Azul
//context.lineWidth = 3;
//context.strokeStyle = 'blue';
//context.strokeRect(50, 50, 100, 100);

//Inicio do caminho(apaga os desenhos feitos anteriormente) 
context.beginPath();
//Aqui faço meu desenho
context.moveTo(75, 250);
context.lineTo(150, 50);
context.lineTo(225, 250);
context.lineTo(50, 120);
context.lineTo(250, 120);
context.lineTo(75, 250);

//Configura a linha
context.lineWidth = 2;  
context.strokeStyle = 'red';

// Traça as linhas do caminho
context.stroke();



//Preencher toda a área desenhada
context.stroke();

var graus;

var radianos = graus * Math.PI / 180;

context.arc(
    50,
    50,
    40,
    90*Math.PI/180, // Inicio de 90 Graus
    270*Math.PI/180, // Término de 270 Graus
    false // Sentido anti-horário
);
context.fillStyle = 'gray';
context.strokeStyle = 'black';
context.lineWidth = 2;
//Primeiro arco(Esquerda)
context.beginPath();
context.arc(50, 50, 40, 90*Math.PI/180, 270*Math.PI/180, false);
context.fill();
context.stroke();

//Segundo arco(Direita)
context.beginPath();
context.arc(150, 50, 40, 90*Math.PI/180, 270*Math.PI/180, true);
context.fill();
context.stroke();

//Arco completo
context.beginPath();
context.arc(250, 50, 40, 0, 2*Math.PI);
context.fill();
context.stroke();


var image = new Image();
image.src = '/assets/images/Alien-PNG.png';
image.onload = function(){

    var x = 20;

    for(var i = 1; i<=5; i++){
        context.drawImage(image, x, 20, 128, 64);
        x += 70;
    }
}
var image = new Image();
image.src = '/assets/images/Explosao.png';
image.onload = function() {
    context.drawImage(
        image,
    80, 10, 60, 65, // Área do Recorte
    20, 20, 60, 65 // Desenho do canvas
    );
}
    