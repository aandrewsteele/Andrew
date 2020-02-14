let slider
let sliderSaturation
let sliderBrightness
let textInput


function setup(){
    slider = createSlider(0, 360, 100);
    sliderSaturation = createSlider(0, 360, 100);
    sliderBrightness = createSlider(0, 360, 100);
    textInput = createInput("hello");
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB);
}

function draw(){
    background(slider.value(), sliderSaturation.value(), sliderBrightness.value());

    textSize(80);
    textAlign(CENTER);
    text(textInput.value(), random(900), random(500));
}