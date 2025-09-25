function setup() {
  createCanvas(800, 800);
  background(255, 140, 105);
  noStroke();
  
  let tileSize = 40;
  let spacing = 60;
  
  for (let y = 0; y <= height; y += spacing) {
    let r = random(255);
    let g = random(255);
    let b = random(255);
    fill(r, g, b);

    for (let x = 0; x <= width; x += spacing) {
      rect(x, y, tileSize, tileSize);
    }
  }
}
