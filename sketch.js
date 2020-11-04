const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Stand, sling, circle

var block1, block2, block3, block4, block5
var block6, block7, block8
var block9
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    Stand = new Ground(390, 240, 150,10);
    block1 = new Box(330,235,30,40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450, 235, 30, 40);

    block6 = new Box(360, 195, 30, 40);
    block7 = new Box(390, 195, 30, 40);
    block8 = new Box(420, 195, 30, 40);

    block9 = new Box(390, 155, 30, 40);

    circle = new Circle(215,30);

    slingshot = new Slingshot(circle.body,{x:215, y:30});


}

function draw(){
    background("grey");
    Engine.update(engine);
    Stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    circle.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(circle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
