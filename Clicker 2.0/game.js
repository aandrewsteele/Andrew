// Initialize UI Elements
let catImg
let scoreDisplay
let livesDisplay
let difficultySlider
let title

// Initialize Game Variables
let lives = 3
let score = 0
let opacity = 1
let winningNum = 5

function setup() {
  // Setup Canvas
  createCanvas(windowWidth, windowHeight)
  catImg = createImg('cat.png', 'cat image')

  
  // Setup Lives Display
  livesDisplay = createElement('h4', 'LIVES: ' + lives)
  livesDisplay.position(width / 20, height / 14)
  
  
  // Creates Difficulty Slider
  const difficultyLabel = createElement('h4', 'DIFFICULTY')
  frameRate(2)
  
}

function draw() {
  catImg.position(random(width), random(height))
  // Adjust frameRate according to slider


  // Randomly Position Banana

}

function mousePressed() {
  if (dist(mouseX, mouseY, catImg.x, catImg.y) > 200) {
    decreaseLives()
  }
}

function increaseScore() {

}

function decreaseLives() {

}

function checkWin() {


}

function checkLose() {

}