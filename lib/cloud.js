let Cloud = function () {

  let newCloud = {
    X: Math.random() * width,
    Y: Math.random() * height,
    image: new Image()
  };

  newCloud.image.src = ("./assets/images/cloud" + Math.floor(Math.random()*3) + ".png");

  return newCloud;

};
