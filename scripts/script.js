let questionsData = [
  {
    statement: '¿Cuál de las siguientes opciones sobre las funciones de JavaScript es correcta?',
    answers: [
      { text: 'JavaScript es complementario e integrado con HTML', for: 'q1AnswerOne', nameAttribute: 'questionOne', correct: false },
      { text: 'JavaScript es abierto y multiplataforma', for: 'q1AnswerTwo', nameAttribute: 'questionOne', correct: false },
      { text: 'Las dos anteriores', for: 'q1AnswerThree', nameAttribute: 'questionOne', correct: true},
      { text: 'Ninguna de las anteriores', for: 'q1Answerfour', nameAttribute: 'questionOne', correct: false },
    ]
  },
  {
    statement: '¿Qué método devuelve los caracteres de una cadena que comienza en la ubicación especificada?',
    answers: [
      { text: 'substr()', for: 'q2AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'getSubstring()', for: 'q2AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'slice()', for: 'q2AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'None of the above.', for: 'q2Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  },
  {
    statement: '¿Cuál de las siguientes métodos de Number devuelve una versión de valor de cadena del número actual?',
    answers: [
      { text: 'toString()', for: 'q3AnswerOne', nameAttribute: 'questionThree', correct: true },
      { text: 'toFixed()', for: 'q3AnswerTwo', nameAttribute: 'questionThree', correct: false },
      { text: 'toLocaleString()', for: 'q3AnswerThree', nameAttribute: 'questionThree', correct: false },
      { text: 'toPrecision()', for: 'q3Answerfour', nameAttribute: 'questionThree', correct: false },
    ]
  }, 
  {
    statement: '¿Cuál de los siguientes NO es un tipo de datos primitivo en JavaScript?',
    answers: [
      { text: 'Number', for: 'q4AnswerOne', nameAttribute: 'questionFour', correct: false },
      { text: 'String', for: 'q4AnswerTwo', nameAttribute: 'questionFour', correct: false },
      { text: 'Boolean', for: 'q4AnswerThree', nameAttribute: 'questionFour', correct: false },
      { text: 'Object', for: 'q4Answerfour', nameAttribute: 'questionFour', correct: true },
    ]
  }, 
  {
    statement: '¿Qué hace el operador "typeof" en JavaScript?',
    answers: [
      { text: 'Devuelve el tipo de dato de una variable', for: 'q5AnswerOne', nameAttribute: 'questionFive', correct: true },
      { text: 'Comprueba si una variable está definida', for: 'q5AnswerTwo', nameAttribute: 'questionFive', correct: false },
      { text: 'Asigna un valor a una variable', for: 'q5AnswerThree', nameAttribute: 'questionFive', correct: false },
      { text: 'Concatena dos cadenas', for: 'q5Answerfour', nameAttribute: 'questionFive', correct: false },
    ]
  }, 
  {
    statement: 'Cuál es la salida del siguiente código: consola.log(2 + “2”);',
    answers: [
      { text: '“4”', for: 'q6AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: '"22"', for: 'q6AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: '4', for: 'q6AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: '22', for: 'q6Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: '¿Cuál de los siguientes NO es un operador de comparación en JavaScript?',
    answers: [
      { text: '==', for: 'q7AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: '!=', for: 'q7AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: '=<', for: 'q7AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: '===', for: 'q7Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: `Cuál es el output del siguiente código: 
    var x = verdadero;
    console.log(!x);`,
    answers: [
      { text: 'true', for: 'q8AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'false', for: 'q8AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'undefined', for: 'q8AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'Error', for: 'q8Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: `Cuál es el output del siguiente código: 
    var x = 8;
    var y = "8";
    console.log(x == y);`,
    answers: [
      { text: 'true', for: 'q9AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'false', for: 'q9AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'undefined', for: 'q9AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'Error', for: 'q9Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: '¿Cuál es la forma correcta de declarar una variable en JavaScript?',
    answers: [
      { text: 'var x = 5;', for: 'q10AnswerOne', nameAttribute: 'questionSix', correct: false },
      { text: 'variable x = 5;', for: 'q10AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'x = 5', for: 'q10AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'let x = 5;', for: 'q10Answerfour', nameAttribute: 'questionSix', correct: true },
    ]
  },
];

const quizSections = {
  home: {
    title: 'Js sabe como rizar el rizo',
    id: 'home',
  },
  quiz: {
    title: 'Preparad@ para aprender más?',
    id: 'quiz',
  },
  results: {
    title: 'Aquí están tus resultados!!!',
    id: 'score',
  }
};

document.querySelector('.makeQuizBtn').addEventListener('click', () => {
  document.querySelector('.arrow_up').classList.remove('hidden');
  setSection(quizSections.quiz);
});

document.querySelector('.tryAgainBtn').addEventListener('click', () => {
  document.querySelector('.arrow_up').classList.remove('hidden');
  setSection(quizSections.quiz);
});

document.querySelector('.homeBtn').addEventListener('click', () => {
  document.querySelector('.arrow_up').classList.add('hidden');
  setSection(quizSections.home);
});
document.querySelector('.footer__logo').addEventListener('click', () => {
  document.querySelector('.arrow_up').classList.add('hidden');
  setSection(quizSections.home);
});

function getAnswerNode(answer, colorClass) {
  const label = document.createElement('label');
  label.setAttribute('for', answer.for);
  label.textContent = answer.text;
  label.classList.add(colorClass);

  const input = document.createElement('input');
  input.setAttribute('id', answer.for);
  input.setAttribute('type', 'radio');
  input.setAttribute('name', answer.nameAttribute);
  input.setAttribute('value', answer.text);

  label.appendChild(input);

  return label;
}

function getQuestionNode(question) {
  const container = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = question.statement
  container.appendChild(legend);

  const sectionNode = document.createElement('section');
  container.appendChild(sectionNode);
  
  question.answers.forEach((answer, index) => {
    let colors = ['answerOne', 'answerTwo', 'answerThree', 'answerFour'];
    const answerNode = getAnswerNode(answer, colors[index]);
    sectionNode.appendChild(answerNode);
    
    const setAnswerValid = () => {
      question.validAnswerSelected = answer.correct;
        sectionNode.querySelectorAll('label').forEach(label => {
        if (label.querySelector('input').checked) {
          label.classList.add('selected');
        } else {
          label.classList.remove('selected');
        }
      })
    }
    answerNode.addEventListener('click', setAnswerValid);
  });
  return container;
}

function setQuizQuestions(questions) {
  const form = document.querySelector('.questionsForm');
  const submitBtn = document.querySelector('.submitBtn');

  questions.forEach(question => {
    const questionNode = getQuestionNode(question);
    form.insertBefore(questionNode, submitBtn);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const score = questions.filter(question => question.validAnswerSelected).length;
    const maxScore = questions.length;
    document.querySelector('.arrow_up').classList.add('hidden');
    setScore(score, maxScore);
    setSection(quizSections.results);
  })
}

function setTitlePage(title) {
  const h1 = document.querySelector('h1');
  h1.innerHTML = title;
}

function setVisibleSection(targetSectionId) {
  const sections = Object.values(quizSections);
  
  sections.forEach(section => {
    const sectionNode = document.getElementById(section.id);
    if (section.id === targetSectionId) {
      sectionNode.classList.remove('hidden');
    } else {
      sectionNode.classList.add('hidden');
    }
  })
}

function setScore(score, total) {
  const pointerNode = document.querySelector('#points');
  pointerNode.textContent = `${score}/${total}`;
}

function setSection(section) {
  setTitlePage(section.title);
  setVisibleSection(section.id);
}

// Init
setQuizQuestions(questionsData);
setSection(quizSections.home);