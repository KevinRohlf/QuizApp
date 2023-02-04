let currentQuestion = 0





function render() {
    renderQuestionCount();
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

    index.innerHTML = questions.length;
};


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(i){
    let question = questions[currentQuestion];
    let index = document.getElementById(`boxAnswer_${i}`);
    let text = document.getElementById(`answer_${i}`)
    let right_answer = document.getElementById(`boxAnswer_${question['right_answer']}`)

    if (i === question['right_answer']) {
        alert('richtig');
        index.classList.add('border-success');
        index.classList.remove('border-0');
        text.classList.add('text-success')
    }
    else {
        alert('falsch')
        index.classList.add('border-danger');
        index.classList.remove('border-0');
        text.classList.add('text-danger')

        right_answer.classList.add('border-success');
        right_answer.classList.remove('border-0');
        console.log(right_answer)
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion(){
    currentQuestion++;
    showQuestion();
}
