var num_points = 1000;
var num_list = [];
var r = 100;
var spacing;
var startIndex = 0;
function setup() {
  createCanvas(600, 600);
  background(0);
  spacing = TWO_PI / num_points;
  for (let i = 0; i < num_points; i++) {
    num_list.push(random(10, 100));
  }
  // print("Initial list:", num_list);
}
function setPoints() {
  translate(width / 2, height / 2);

  for (let i = 0; i < num_points; i++) {
    let angle = i * spacing - PI / 2;
    let x = r * cos(angle);
    let y = r * sin(angle);
    push();
    translate(x, y);
    if (i == startIndex) {
      stroke(255, 0, 0);
    } else {
      stroke(
        lerpColor(
          color(255, 0, 0),
          color(0, 0, 255),
          (2 * num_list[0]) / num_list[i]
        )
      );
    }
    let r2 = num_list[i];
    x = r2 * cos(angle);
    y = r2 * sin(angle);
    point(x, y);
    line(0, 0, x, y);
    pop();
  }
}
function draw() {
  background(0);
  stroke(255);
  point(0, 0);

  setPoints();
  // Sorting here
  if (startIndex < num_points) {
    let smallest = startIndex;
    for (let i = startIndex; i < num_points; ++i) {
      if (num_list[i] < num_list[smallest]) {
        smallest = i;
      }
    }
    let temp = num_list[startIndex];
    num_list[startIndex] = num_list[smallest];
    num_list[smallest] = temp;
  } else {
    // print(num_list);
    // noLoop();
  }
  startIndex++;
}
