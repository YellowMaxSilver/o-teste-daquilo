
//é a física, gravidade,bonceOff,etc...;
//o Wolrd é onde criamos as coisas no mundo;
//Bodies são os objetos do mundo em que vamos criar;
//Ele fas um corpo ficar preso ao outro
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tela;
var bola

var caixa_1;
var caixa_2;
var caixa_3;
var caixa_4;
var caixa_5;
var tronco_2;
var tronco_3;
var porcos;

var fios

var engine;
var world;
function preload() {

  fundo = loadImage ("bg.png");
}

function setup() {
  tela = createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world; 

  
   caixa_1 = new caixa(1000,350,50,50);
   caixa_2 = new caixa(850,350,50,50);

   caixa_3 = new caixa(1000,290,50,50)
   caixa_4 = new caixa(850,290,50,50)
   caixa_5 = new caixa(925,230,50,50);

   tronco_1 = new tronco(925,310,300,10);

   tronco_2 = new tronco(925,240,300,10);
   tronco_3 = new tronco(150,349,200,10)
   
   passaro = new bird(150,350,50,50)

   porcos = new porco(925,350,50,50);
   porcos_1 = new porco(925,290,50,50)

   bola = new piso (600,378,1200,50);

   fios = new constituti (passaro.geral,tronco_3.geral)
 
}

function draw() {
  background(fundo);  

  Engine.update(engine);
  
  caixa_1.display();
  caixa_2.display();
  porcos.display();
  porcos_1.display();
  bola.display();
  tronco_1.display();
  passaro.display();
  caixa_3.display();
  caixa_4.display();
  caixa_5.display();
  tronco_2.display();
  tronco_3.display();


  //drawSprites();


}

