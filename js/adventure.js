const textElement = document.getElementById('message')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.phase === textNodeIndex)
  textElement.innerText = textNode.message
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.message
      button.classList.add('button')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextPhase
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    phase: 1,
    message: "Life Of A College Student: Choose Your Starting Location ",
    options: [
      {
        message: 'Student Center East',
        nextPhase: 3
      },
      {
        message: 'Behavioral Sciences Building',
        nextPhase: 2
      },
      {
        message: 'The Quad',
        nextPhase: 2
      },
        {
        message: 'The Library',
        nextPhase: 2
      },


    ]
  },
  {
    phase: 2,
    message: 'You realize you can\'t go through your day without a nice cup of coffee.',
    options: [
      
      {
        message: 'Go to SCE because not just America, but you also run on Dunkin',
        nextPhase: 3
      }
    ]
  },
  {
    phase: 3,
    message: 'You get your Dunkin and then you ask yourself what should I do next.',
    options: [
      {
        message: 'Attend your class.',
        nextPhase: 6
      },
      {
        message: 'Catch up on your favorite show.',
        nextPhase: 5
      },
      {
        message: 'or just take a nap because a cup of joe is never enough',
        nextPhase: 4
      }
    ]
  },
  {
    phase: 4,
    message: 'You put in your air pods, take a nap on the east terrace and UNFORTUNATLY wake up at the end of your day, miss all your classes and go home.',
    options: [
      {
        message: 'Restart',
        nextPhase: -1
      }
    ]
  },
  {
    phase: 5,
    message: 'You find out you missed an entire quiz and receive a big fat 0 which you know you couldn\'t afford.',
    options: [
      {
        message: 'Restart',
        nextPhase: -1
      }
    ]
  },
  {
    phase: 6,
    message: 'Arriving to class you realize there is a pop quiz and haven\'t studied. You need to pass to keep your overall passing. ',
    options: [
      {
        message: 'You decide to just wing it and just accept that the universe is out to get you.',
        nextPhase: 7
      },
    
      {
        message: 'Or cheat of the guy who sits next to you.',
        nextPhase: 7
      }
    
    ]
  },
  {
    phase: 7,
    message: 'You actually walk out feeling really good about your score so you decide to treat yourself.',
    options: [
      {
        message: 'Fit in a nice stress free work out in.',
        nextPhase: 8
      },
      {
        message: 'Head over to Sbarros for that fire student combo.',
        nextPhase: 9
      },
      {
        message: 'Meet up with a friend on campus.',
        nextPhase: 10
      },
      {
        message: 'Just go home early.',
        requiredState: (currentState) => currentState.blueGoo,
        nextPhase: 11
      }
    ]
  },
  {
    phase: 8,
    message: 'While working out you pull a hammie really bad and go to the hospital. RIP :(',
    options: [
      {
        message: 'Restart',
        nextPhase: -1
      }
    ]
  },
  {
    phase: 9,
    message: 'You get there and realize there isn\'t any sausage pizza and fall into a deep depression.',
    options: [
      {
        message: 'Restart',
        nextPhase: -1
      }
    ]
  },
  {
    phase: 10,
    message: 'Your friend meets you in the quad only to find out you\'re going to be third wheeling. ',
    options: [
      {
        message: 'Restart',
        nextPhase: -1
      }
    ]
  },
  {
    phase: 11,
    message: 'You get home and to your surprise your mom made your favorite dish. You eat until you are stuffed and then doze into a full night\'s rest (rare for our kind) :)',
    options: [
      {
        message: 'Congratulations. Play Again.',
        nextPhase: -1
      }
    ]
  }
]




startGame()