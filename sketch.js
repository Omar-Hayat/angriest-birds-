const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var pig1, pig2;
var bird;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,width,20);

    box1 = new Box(750,300,60,60);
    pig1 = new Pig(800,300);
    box2 = new Box(850,300,60,60);
    log1 = new Log(800,250,220,PI/2);
    
    box3 = new Box(750,200,60,60);
    pig2 = new Pig(800,200);
    box4 = new Box(850,200,60,60);
    log2 = new Log(800,150,220,PI/2);

    box5=new Box(800,120,50,50);
    log3=new Log(770,120,130,PI/7);
    log4=new Log(830,120,130,-PI/7);

    bird=new Bird(100,200);


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();

    box1.display();
    pig1.display();
    box2.display();
    log1.display();
    
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}