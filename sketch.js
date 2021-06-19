var starImg,bgImg;
var star, starBody;
var fairy,fairyVoice,fairyIm

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
fairyIm = loadAnimation("images/fairyimage1.png","images/fairyimage2.png")
fairyVoice = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

//	fairyVoice.play()

	//create fairy sprite and add animation for fairy

fairy = createSprite (150,550,20,20)
fairy.addAnimation("flyer",fairyIm)
fairy.scale = 0.2


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
 edges= createEdgeSprites
 

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position > 470){
	Matter.Body.setStatic(starBody,true); 
fairy.y = star.y
fairy.x = star.x
}


  
 
  drawSprites()

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
		fairy.velocityX = 5
		}
		
		if(keyCode === LEFT_ARROW){
			fairy.velocityX = -5
			}
		




	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	

}
