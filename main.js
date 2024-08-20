  
  function setup() {
    canvas = createCanvas(640, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
  }
  
  function draw() {
    image(video, 0, 0, 640, 480);
    tint(tint_color);
  }

  function take_snapshot() {
    save('sealfy.png');
  }

  function filter_tint() {
    tint_color = document.getElementById("color").value;
  }