let grotesk;
let alphabet = [];
let bot = [];
let alphabetArray1;


function preload() {

  grotesk = loadFont('assets/Grotesk_Bold.otf');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(grotesk);
  // textStyle(BOLD);
  fill(255, 0 ,0)
  alphabetArray1 = grotesk.textToPoints('Code', width / 2 - 350, height / 2 + 140, 300);

  for (let i = 0; i < alphabetArray1.length; i++) {

    alphabet[i] = new Alphabet(alphabetArray1[i].x, alphabetArray1[i].y);

  }

  for (let i = 0; i < 15; i++) {

    bot[i] = new Bot();

  }

  // print(alphabetArray1.length, bot.length);
  
}

function draw() {
  background('#aaff66');

  for (let i = 0; i < bot.length; i++) {

    bot[i].show();
    bot[i].move();
    bot[i].collisionDetection();

  }

  for (let i = 0; i < alphabet.length; i++) {

    alphabet[i].show();

  }

}

class Alphabet {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  show() {
    rect(this.x, this.y, 10, 10);
  }

}

class Bot {

  constructor() {
    this.x = random(140, 150);
    this.y = random(200, 220);
    this.s = random(5, 10);
    this.direction = random(-1, 1);
    this.direction1 = random(-1, 1);
    this.d;
  }

  show() {
    rect(this.x, this.y, this.s, this.s);
  }

  move() {

    this.x = this.x + this.direction*14;
    this.y = this.y + this.direction1*3;

    if (this.x > width || this.x < 0) {
      this.direction = -this.direction;
    }

    if (this.y > width || this.y < 0) {
      this.direction1 = -this.direction1;
    }
  }

  collisionDetection() {

    for (let i = 0; i < alphabet.length; i++) {
      this.d = dist(alphabet[i].x, alphabet[i].y, this.x, this.y);

      if (this.d < 5) {
        this.direction = -this.direction;

        this.direction1 = -this.direction1;

        alphabet.splice(i, 1);
      }

    }
  }

}