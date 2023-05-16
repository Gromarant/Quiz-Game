let questions = [
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
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  },
  {
    statement: 'Pregunta2',
    answers: [
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  }, {
    statement: 'Pregunta2',
    answers: [
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  }, {
    statement: 'Pregunta2',
    answers: [
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  }, {
    statement: 'Pregunta2',
    answers: [
      { text: 'respuesta1', for: 'q1AnswerOne', nameAttribute: 'questionTwo', correct: true },
      { text: 'respuesta2', for: 'q1AnswerTwo', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta3', for: 'q1AnswerThree', nameAttribute: 'questionTwo', correct: false },
      { text: 'respuesta4', for: 'q1Answerfour', nameAttribute: 'questionTwo', correct: false },
    ]
  },
];

function getAnswerNode(answer) {
  const label = document.createElement('label');
  label.setAttribute('for', answer.for);
  label.textContent = answer.text;

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

  const section = document.createElement('section');
  container.appendChild(section);
  
  question.answers.forEach(answer => {
    const answerNode = getAnswerNode(answer);
    section.appendChild(answerNode);
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
}

setQuizQuestions(questions);