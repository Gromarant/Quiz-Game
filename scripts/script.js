let questionsData = [
  {
    statement: 'Pregunta1',
    answers: [
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionOne', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionOne', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionOne', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionOne', correct: false },
    ]
  },
  {
    statement: 'Pregunta2',
    answers: [
      { text: 'respuesta1', for: 'q2AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q2AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q2AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q2Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  },
  {
    statement: 'Pregunta3',
    answers: [
      { text: 'respuesta1', for: 'q3AnswerOne', nameAttribute: 'questionThree', correct: true },
      { text: 'respuesta2', for: 'q3AnswerTwo', nameAttribute: 'questionThree', correct: false },
      { text: 'respuesta3', for: 'q3AnswerThree', nameAttribute: 'questionThree', correct: false },
      { text: 'respuesta4', for: 'q3Answerfour', nameAttribute: 'questionThree', correct: false },
    ]
  }, 
  {
    statement: 'Pregunta4',
    answers: [
      { text: 'respuesta1', for: 'q4AnswerOne', nameAttribute: 'questionFour', correct: true },
      { text: 'respuesta2', for: 'q4AnswerTwo', nameAttribute: 'questionFour', correct: false },
      { text: 'respuesta3', for: 'q4AnswerThree', nameAttribute: 'questionFour', correct: false },
      { text: 'respuesta4', for: 'q4Answerfour', nameAttribute: 'questionFour', correct: false },
    ]
  }, 
  {
    statement: 'Pregunta5',
    answers: [
      { text: 'respuesta1', for: 'q5AnswerOne', nameAttribute: 'questionFive', correct: true },
      { text: 'respuesta2', for: 'q5AnswerTwo', nameAttribute: 'questionFive', correct: false },
      { text: 'respuesta3', for: 'q5AnswerThree', nameAttribute: 'questionFive', correct: false },
      { text: 'respuesta4', for: 'q5Answerfour', nameAttribute: 'questionFive', correct: false },
    ]
  }, 
  {
    statement: 'Pregunta6',
    answers: [
      { text: 'respuesta1', for: 'q6AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'respuesta2', for: 'q6AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta3', for: 'q6AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta4', for: 'q6Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: 'Pregunta7',
    answers: [
      { text: 'respuesta1', for: 'q7AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'respuesta2', for: 'q7AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta3', for: 'q7AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta4', for: 'q7Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: 'Pregunta8',
    answers: [
      { text: 'respuesta1', for: 'q8AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'respuesta2', for: 'q8AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta3', for: 'q8AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta4', for: 'q8Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: 'Pregunta9',
    answers: [
      { text: 'respuesta1', for: 'q9AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'respuesta2', for: 'q9AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta3', for: 'q9AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta4', for: 'q9Answerfour', nameAttribute: 'questionSix', correct: false },
    ]
  },
  {
    statement: 'Pregunta10',
    answers: [
      { text: 'respuesta1', for: 'q10AnswerOne', nameAttribute: 'questionSix', correct: true },
      { text: 'respuesta2', for: 'q10AnswerTwo', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta3', for: 'q10AnswerThree', nameAttribute: 'questionSix', correct: false },
      { text: 'respuesta4', for: 'q10Answerfour', nameAttribute: 'questionSix', correct: false },
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
  setSection(quizSections.quiz);
});

document.querySelector('.tryAgainBtn').addEventListener('click', () => {
  setSection(quizSections.quiz);
});

document.querySelector('.homeBtn').addEventListener('click', () => {
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
      sectionNode.classList.remove('hidden')
    } else {
      sectionNode.classList.add('hidden')
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