let currentQuestion = 0;
let points = 0;
let audioSuccess = new Audio('./mp3/success.mp3')




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
        showEndscreen();
    } else {
        let question = questions[currentQuestion];
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    	progressBar();
        renderQuestionCount();
    }
}

function showEndscreen(){
    document.getElementById('endscreen').style = '';
    document.getElementById('tropy').style = '';
    document.getElementById('quiz').style = 'display: none !important;';
    result();
    progressBar();
}

function progressBar() {
        let progress = currentQuestion / questions.length;
        progress = Math.round(progress * 100);
        document.getElementById('progress-bar').innerHTML = `${progress}%`;
        document.getElementById('progress-bar').style = `width: ${progress}%`;
}

function answer(i) {
    let question = questions[currentQuestion];
    let index = document.getElementById(`boxAnswer_${i}`);
    let right_answer = document.getElementById(`boxAnswer_${question['right_answer']}`)
    if (i === question['right_answer']) {
        index.classList.add('bg-success');
        points++;
        index.disabled = true;
        audioSuccess.play();
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

function result() {
    document.getElementById('result').innerHTML = `${points}/${questions.length}`;
}

function restart() {
    currentQuestion = 0;
    document.getElementById('endscreen').style = 'display: none !important;';
    document.getElementById('tropy').style = 'display: none !important;';
    document.getElementById('quiz').style = '';
    showQuestion();
}
