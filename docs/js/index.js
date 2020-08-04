document.getElementById('main').innerHTML = new Array(1000).fill(0).map((d,i) => `${i+1}行目…………………………`).join('<br />');

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  colorMode(HSB, 360, 100, 100);
}


function draw() {
  const brightness = 100 - constrain(window.scrollY / 100, 0, 60);
  background(200, 20, brightness);
  
  noStroke();
  fill((window.scrollY * 0.1) % 360, 50, brightness, 0.5);
  
  for (let i = -5; i <= 5; i++) {
    push();
    translate(width/2 + i * 200, 200);
    const diffX = map(abs(width/2 + i * 200 - mouseX), 0, width, 1.5, 0);
    scale(lerp(1, 1.25, sin(frameCount % 1000 / 1000.0 * TAU)) + diffX);
    rotate(window.scrollY * 0.005);
    square(0, 0, 100, 100, 25, 25, 25, 25);
    pop();
  }
}

