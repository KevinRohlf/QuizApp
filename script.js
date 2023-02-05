let currentQuestion = 0





function render() {
    showQuestion();
}



function linkFocused(link) {
    let index = document.getElementById(link);
    let links = ['HTML', 'CSS', 'JS', 'Java'];
    let check = links.indexOf(link);

    links.splice(check, 1);
    for (let i = 0; i < links.length; i++) {
        let b = links[i];
        let c = document.getElementById(b);
        c.classList.remove('linkFocused');
    }
    index.classList.add('linkFocused');
};

function renderQuestionCount() {
    let index = document.getElementById('questionCount');
    let count = document.getElementById('currentquestioncount');


    index.innerHTML = questions.length;
    count.innerHTML = currentQuestion + 1;
};


function showQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById('endscreen').style = '';
        document.getElementById('quiz').style = 'display: none !important;'
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

        renderQuestionCount();
    }
}

function answer(i) {
    let question = questions[currentQuestion];
    let index = document.getElementById(`boxAnswer_${i}`);
    let text = document.getElementById(`answer_${i}`)
    let right_answer = document.getElementById(`boxAnswer_${question['right_answer']}`)

    if (i === question['right_answer']) {
        index.classList.add('bg-success');
    }
    else {
        index.classList.add('bg-danger');
        right_answer.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    showQuestion();
    resetAnswerButtons();
    document.getElementById('next-button').disabled = true;
}

function resetAnswerButtons() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`boxAnswer_${i}`).classList.remove('bg-success');
        document.getElementById(`boxAnswer_${i}`).classList.remove('bg-danger');
    }
}
