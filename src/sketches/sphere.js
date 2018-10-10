export default function sphere(p) {
  var theta = 0;
  var backgroundColor = '#faf9f8';
  var strokeColor = '#cb5760';
  var sphereSize = 220;

  p.setup = function() {
    // p.createCanvas(window.innerWidth, window.innerHeight);
    p.createCanvas(600, 500);
    p.smooth();
  };

  p.draw = function() {
    Sphere();
  };

  function Sphere() {
    theta += 0.2;
    p.background(backgroundColor);
    p.stroke(strokeColor);
    p.translate(p.width / 2, p.height / 2);
    p.noFill();
    for (var i = -0.5 * p.PI; i < p.PI + 0.5 * p.PI; i += 0.01 * p.PI) {
      p.beginShape();
      for (
        var j = -p.sin(i) * sphereSize;
        j < p.sin(i) * sphereSize + p.sin(i);
        j += p.sin(i) * 1
      ) {
        p.curveVertex(j, p.cos(i) * sphereSize + p.sin(theta - j / 32) * p.abs(i * 3));
      }
      p.endShape();
    }
  }
}
