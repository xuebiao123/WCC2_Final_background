//Referenced codes for draw tree: https://editor.p5js.org/joemcalister/sketches/6v-N3urTT

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw(){
  background(255);

  // --------Three types of trees------
  push();
  for(let i=0; i<30 ;i++){
    stroke(150,130);
    fill(0,20);
    drawTree2();
  }
  pop();

  push();
  for(let i=0; i<15 ;i++){
  stroke(150,150);
  fill(0,40);
  drawTree();
  }
  pop();

  push();
  for(let i=0; i<8 ;i++){
  stroke(130,180);
  fill(0,60);
  drawTree3();
  }
  pop();
  drawFog();

  // -------Reference line, to leave a certain blank part of the background---------
  push();
		noFill();
		stroke(0, 0, 0, 100);
		strokeWeight(2);
		let y2 = height/4*0.04;
		bezier(0, y2, width/4, 4, 3*width/4, height*0.75, width, height/2+height/5);
	pop();
}

// --------fog is a slightly opaque rectangle over the entire window---------
function drawFog(){
  push();
  fill(32, 16);
  noStroke();
  rect(0,0,width,height);
  pop();
}

// -----------Recursive part of the loop----------------
// ---------- 3 different branches -----------

function drawTree(){
    let bLen = random(100,height/3);
    let bAng = -PI*0.5;

    push();
    translate(map(bLen,100,height/3,width,0), height);
    branch(bLen, bAng); // initial length and facing up
    branch(bLen + bLen/10, bAng); // initial length and facing up
    pop();
}

function drawTree2(){
  let bLen = random(100,height/5);
  let bAng = -PI*0.5;

  push();
  translate(map(bLen,100,height/5,width,0), height);
  branch(bLen/2, bAng); // initial length and facing up
  branch(bLen/2+bLen/3, bAng); // initial length and facing up
  pop();
}

function drawTree3(){
  let bLen = random(100,height/3);
  let bAng = -PI*0.5;

  push();
  translate(map(bLen,100,height/3,width/2,0), height);
  branch(bLen, bAng); // initial length and facing up
  branch(bLen + bLen/10, bAng); // initial length and facing up
  pop();
}


// ------random numbers-------
function branch(len, theta){
  push();
  rotate(theta); // rotate to the angle provided
  strokeWeight(sqrt(len)*0.8);
  line(0,0, len, 0); // draw one branch
  translate(len,0); // and move to its edge

  if(len > 4.0){ // stop condition - very important!
    let newAng = random(PI*0.25); // create new angle
    branch(len * random(0.4,0.8), - newAng*0.3); // left branch
    branch(len * random(0.4,0.8), newAng);   // right branch
  }else{
    ellipse(0,0,5,5); // only draw a leaf
  }
  pop();
}

// ---------Change the size of the window --------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}