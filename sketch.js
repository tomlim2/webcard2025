let popup;
let inner;
let urlInput;

function settingPopup() {
    button = createButton('공유하기');
    popup = createDiv('');
    popup.addClass('popup');
    popup.hide();

    inner = createDiv('');
    inner.addClass('popup-inner');

    urlInput = createInput('');
    closeButton = createButton('닫기');

    inner.child(urlInput);
    inner.child(closeButton);
    popup.child(inner);
    button.mousePressed(openPopup);
    closeButton.mousePressed(closePopup);
}

function openPopup(){
    popup.show();
}

function closePopup() {
    popup.hide();
}


let message;

//UI
let input

//Snow
let snow1, snow2
let snow1Y = 0
let snow2Y = 0

let colorBG = "rgb(16,115,235)"
let colorSnakeBody = "skyblue"
let colorText = "#f0f0f0"
let colorBlack = "#252525"

function preload(){
  snow1 = loadImage("snow1.png")
  snow2 = loadImage("snow2.png")
}

function setup() {
  createCanvas(400, 600);
  
  input = createInput()
  input.input(onTypeInput)
  settingPopup()
  textFont("Do Hyeon");
  getParams();
  setParams();
  urlInput.value(location.href)
}

function onTypeInput () {
  message = input.value();
  setParams();
  urlInput.value(location.href)
}

function setParams(){
  let url = new URL(location.href);
  url.searchParams.set("message",message);
  history.pushState(null, null, url);
}

function getParams(){
  let url = new URL(location.href);
  message = url.searchParams.get("message");
  if(message == null){
    message = "메메멤멤"
  }
  input.value(message);
}

function draw() {
  background(colorBG);
  
  textSize(40)
  textAlign(CENTER,CENTER)
  rectMode(CENTER);
  
  stroke(colorText)
  //first
  let tongueMove = 0;
  if(frameCount%60>30){
    tongueMove = -10;
  }
  rect(75 + tongueMove,118, 30,10);
  fill(colorSnakeBody)
  arc(125,125,100,100,radians(180), radians(270),PIE)
  fill(colorText)
  ellipse(110,110,20,20);
  fill(colorBlack)
  ellipse(110,110,10,10);
  fill(colorSnakeBody)
  rect(150, 100, 50, 50);
  rect(200, 100, 50, 50);
  rect(250, 100, 50, 50);
  arc(275,125,100,100,radians(-90), radians(0),PIE)

  fill(colorText)
  text(message[0],150,100)
  text(message[1],200,100)
  text(message[2],250,100)
  
  fill(colorSnakeBody)
  rect(300,150,50,50)
  
  //sec
  arc(125,225,100,100,radians(180), radians(270),PIE)
  rect(150, 100+100, 50, 50);
  rect(200, 100+100, 50, 50);
  rect(250, 100+100, 50, 50);
  arc(275,175,100,100,radians(0), radians(90),PIE)
  
  fill(colorText)

  text(message[3],150,100+100)
  text(message[4],200,100+100)
  text(message[5],250,100+100)
  
  fill(colorSnakeBody)
  
  rect(100,250,50,50)
  
  //thrd
  arc(125,275,100,100,radians(90), radians(180),PIE)
  rect(150, 100+100*2, 50, 50);
  rect(200, 100+100*2, 50, 50);
  rect(250, 100+100*2, 50, 50);
  arc(275,325,100,100,radians(-90), radians(0),PIE)
  
  fill(colorText)
  
  text(message[6],150,100+100*2)
  text(message[7],200,100+100*2)
  text(message[8],250,100+100*2)
  
  fill(colorSnakeBody)
  rect(300,350,50,50)
  
  //frth
  arc(125,425,100,100,radians(180), radians(270),PIE)
  rect(150, 100+100*3, 50, 50);
  rect(200, 100+100*3, 50, 50);
  rect(250, 100+100*3, 50, 50);
  arc(275,375,100,100,radians(0), radians(90),PIE)
  
  fill(colorText)

  text(message[9],150,100+100*3)
  text(message[10],200,100+100*3)
  text(message[11],250,100+100*3)
  
  
  textSize(110);
  text(2025, 200, 480)
  snowFalling()
}

function snowFalling(){
  // moduler
  snow1Y = (snow1Y + 1) % height;
  image(snow1, 0, snow1Y-height, 400,600);
  image(snow1, 0, snow1Y, 400,600);
  
  snow2Y = (snow2Y + 2) % height;
  image(snow2, 0, snow2Y-height, 400,600);
  image(snow2, 0, snow2Y, 400,600);  
}