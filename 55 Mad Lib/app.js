let outputDivUI
let inputDivUI

function setup() {
  createCanvas(windowWidth, windowHeight)

  addInputOutputElements()

  addTopic(
    'place',
    'I once lived with my pet in a place called ',
    '. Never have I been to a more disgusting place where tyrannical gnomes rule.',
    false,
    false,
  )

  addTopic(
      'food',
      'My favorite food is ',
      '. That is gross.',
      false,
      false,
  )

  addTopic(
      'social security number',
      'I have a wonderful social security number, it is ',
      " which is quite long. What do you think?",
      false,
      false,
  )

  addTopic(
      'person',
      'There once was a person named ',
      ' and they were the worst person in the world.',
      false,
      false,
  )

  addTopic(
      'routing number',
      'My bank routing number is ',
      '. I love saving money with my savings account!',
      false,
      true,
  )
  
  // Creates next button and styles it
  const outputDisplayBtn = createButton('NEXT')
  outputDisplayBtn.mousePressed(showOutputHandler)
  outputDisplayBtn.parent(inputDivUI)

  // ADD CODE: call .parent() to attach the button to the inputDivUI

  function showOutputHandler() {
    outputDivUI.show()
    inputDivUI.hide()

    // ADD CODE: Hide the inputDivUI
  }
}

function addInputOutputElements() {
  createElement('h1', 'Identity Theft Simulator')
  createElement('h4', 'Ever wondered what it is like to get your identity stolen? Wonder no more!')

  inputDivUI = createDiv('').id('inputs')
  outputDivUI = createDiv('').id('outputs')
  outputDivUI.hide()
}

function addTopic(topic, intro, detail, uppercase, num) {
  createElement('p', `Name a ${topic.toUpperCase()}`)
    .id('input-label')
    .parent(inputDivUI)

  const inputFieldUI = createInput(' ')
    .id('input-field')
    .parent(inputDivUI)

  inputFieldUI.changed(updateOutputHandler)

  function updateOutputHandler() {
    const output = createP('').parent(outputDivUI)
    // ADD CODE: convert the user input to lowercase by default
    let userInput = inputFieldUI.value().toLowerCase()

    // ADD CODE: convert to uppercase
    if (uppercase === true) {
      // ADD CODE: reassign userInput to be userInput.toUpperCase()
      userInput = userInput.toUpperCase()
    }
    if (num === true){
        userInput = Number(userInput)
        userInput =`You look ${userInput + 30} percent ugly today!`
    }

    // ADD CODE: CONVERT TO NUM
    // add if() statement that checks to see iff num === true.
    // if true, convert userInput to a number and perform some math on it

    // OUTPUT BACK TO USER IN THE OUTPUT FIELD
    output.html(`${intro}${userInput}${detail}`)
  }
}
