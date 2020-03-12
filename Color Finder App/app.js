/* eslint-disable no-eval */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

function setup() {
    let randButtonId = 1
    let currentPlayer = 1
    let p1Score = 0
    let p2Score = 0
    // let diffColor = 'RGB(1,1,1)'
  
    // Get UI Elements
    const p1ScoreDisplay = select('#score1')
    const p2ScoreDisplay = select('#score2')
    const button1 = select('#button1')
    const button2 = select('#button2')
    const button3 = select('#button3')
    const button4 = select('#button4')
  
    //const color = 'RGB(320, 155, 0)'
    let R = random(0,255)
    let G = random(0,255)
    let B = random(0,255)

    let color = `RGB(${R}, ${G}, ${B})`


    R += 20
    G += 20
    B += 20

    let diffColor = `RGB(${R}, ${G}, ${B})`

  
  
    button1.style('background-color', color)
    button2.style('background-color', color)
    button3.style('background-color', color)
    button4.style('background-color', color)

    randButtonId = `button${Math.floor(random(1, 5))}`
    select(`#${randButtonId}`).style('background-color', diffColor)
    console.log(`correct button is: ${randButtonId}`)


  }