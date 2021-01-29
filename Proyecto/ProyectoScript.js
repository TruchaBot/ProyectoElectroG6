var canvas = document.getElementById("Canvas1")
var sliderDis = document.getElementById("DistanciaSli");
var sliderPas = document.getElementById("PasosSli");
var c = canvas.getContext('2d');

var ancho = 1000;
var alto = 500;
canvas.width = ancho;
canvas.height = alto ;
var centroX = ancho/2;
var centroY = alto/2;

var maxCargas = 20;

sliderDis.min = 100;
sliderDis.max = 700;
sliderPas.min = 0;
sliderPas.max = maxCargas;
sliderPas.value = 0;





//Valores iniciales
var dist = 200;   //Distancia entre cargas
var rad1 = 100 ;    //RADIO esfera 1 = con V
var rad2 = 50;   //Radio esfer 2 V = 0;
var v1 = 1 ;      //Potencial esfera 1
var v2 = 0;        //potencial esfera 2
var centro1X = centroX-dist/2;
var centro2X = centroX+dist/2;
sliderDis.value = dist;


//Primera Carga de datos
drawCircle(centro1X ,centroY,rad1);
drawCircle(centro2X,centroY,rad2);
var arrayCargas =[];
for(var i = 0;i < maxCargas ; i++){
  arrayCargas.push(new CargaP(20 + 40*i,centroY,10,-50 + 10*i))
}





//Se actualiza cada vez que el mouse pasa por el slider de Distancias
sliderDis.addEventListener("mousemove",function()
{ dist = sliderDis.value;
  centro1X = centroX-dist/2;
  centro2X = centroX +dist/2;
  actualizarFrame();
})


//Se actualiza cada vez que el mouse pasa por el slider de Cargas
sliderPas.addEventListener("mousemove",function()
{ var conta = sliderPas.value;
  for(var i = 0 ;i<arrayCargas.length;i++){
    if(i<conta){
    arrayCargas[i].Boolshow = 1;}
    else {
    arrayCargas[i].Boolshow = 0; }
  }

  actualizarFrame();
})

function animar(){
  console.log('Huevo');
  requestAnimationFrame(animar);

  }
animar();





function actualizarFrame(){
  c.clearRect(0,0,innerWidth,innerHeight);
  drawCircle(centro1X,centroY,rad1);
  drawCircle(centro2X,centroY,rad2);
  for (var i = 0;i<arrayCargas.length;i++){
    arrayCargas[i].show();
  }
}




function CargaP(x, y , r , q){
  this.x = x;
  this.y = y;
  this.r = r;
  this.q = q;
  this.Boolshow = 0;
  this.show = function(){
    if(this.Boolshow == 0){   return;   }

    c.beginPath();
    c.arc(x,y,r,0,Math.PI*2,false);
    if(q>=0){
      c.strokeStyle = 'rgba(200,0,0,1)';
      c.fillStyle = 'rgba(200,0,0,1)';}
    else{
      c.strokeStyle = 'rgba(0,0,200,1)';
      c.fillStyle = 'rgba(0,0,200,1)';}
    c.stroke();
    c.fill();
    c.beginPath();
    c.arc(x,y,r*0.75,0,Math.PI*2,false);
    if(q>=0){
      c.fillStyle = 'rgba(255,0,0,1)';}
    else{
        c.fillStyle = 'rgba(0,0,255,1)';}
    c.stroke();
    c.fill();
    c.fillStyle = 'rgba(0,0,0,1)';
    c.textAlign = "center";
    c.font = "15px Arial";
    c.fillText(q+"c", x, y+25);
  }
  this.CalcPotencial = function(xr,yr){

  }
}

function drawCircle(x,y,r){
  c.strokeStyle = 'rgba(0,0,0,1)';
  c.beginPath();
  c.arc(x,y,r,0,Math.PI*2,false);
  c.stroke();
}
