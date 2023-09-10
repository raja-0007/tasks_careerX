var questions = [
    {
        question: 'What does the abbreviation HTML stand for?',

        op1: 'HighText Machine Language',
        op2: 'HyperText and links Markup Language',
        op3: 'HyperText Markup Language',
        op4: 'None of these',
        correct: 'op3'

    },
    {
        question: 'The correct sequence of HTML tags for starting a webpage is',
        op1: 'Head, Title, HTML, body',
        op2: 'HTML, Body, Title, Head',
        op3: 'HTML, Head, Title, Body',
        op4: 'HTML, Head, Title, Body',
        correct: 'op4'
    },
    {
        question: 'Which of the following element is responsible for making the text bold in HTML?',
        op1: '<pre>',
        op2: '<a>',
        op3: '<b>',
        op4: '<br>',
        correct: 'op3'
    },
    {
        question: 'Which of the following tag is used for inserting the largest heading in HTML?',
        op1: '<h3>',
        op2: '<h1>',
        op3: '<h5>',
        op4: '<h6>',
        correct: 'op2'
    },
    {
        question: 'Which of the following tag is used to insert a line-break in HTML?',
        op1: '<br>',
        op2: '<pre>',
        op3: '<a>',
        op4: '<b>',
        correct: 'op1'
    }

]
var marks = [0, 0, 0, 0, 0]
console.log(marks)
document.getElementById('container').style.display = 'none'
document.getElementById('resultdiv').style.display = 'none'
var qno = 0
document.getElementById('start').addEventListener('click', function () {

    document.getElementById('start').style.display = 'none'
    document.getElementById('container').style.display = 'block'
    document.getElementById('submit').style.display = 'none'
    document.getElementById('next').style.display = 'block'
    
    document.getElementById('question').innerText = questions[qno].question
    document.getElementById('op1_txt').innerText = questions[qno].op1
    document.getElementById('op2_txt').innerText = questions[qno].op2
    document.getElementById('op3_txt').innerText = questions[qno].op3
    document.getElementById('op4_txt').innerText = questions[qno].op4
})

document.getElementById('next').addEventListener('click', function () {
    let answer = selected()
    if (answer) {
        if (answer == questions[qno].correct){
            marks[qno] = 1
        }
        else{
            marks[qno] = 0
        }
            
    }
    qno = qno + 1
    unchecked()
    console.log(qno)
    if (qno == questions.length - 1) {
        document.getElementById('next').style.display = 'none'
        document.getElementById('submit').style.display = 'block'
    }
    else {
        document.getElementById('next').style.display = 'block'
        document.getElementById('submit').style.display = 'none'
    }
    document.getElementById('question').innerText = questions[qno].question
    document.getElementById('op1_txt').innerText = questions[qno].op1
    document.getElementById('op2_txt').innerText = questions[qno].op2
    document.getElementById('op3_txt').innerText = questions[qno].op3
    document.getElementById('op4_txt').innerText = questions[qno].op4
    
    
})

function selected() {
    let answer;
    var ansbtns = document.querySelectorAll('.answerops')
    ansbtns.forEach(
        (op)=>{
            if(op.checked){
                answer = op.id
            }
        }
    )
    return answer
}
function unchecked(){
    var ansbtns = document.querySelectorAll('.answerops')
    ansbtns.forEach(
        (op)=>{
            op.checked = false
        }
    )
}
function submit() {
    let answer = selected()
    if (answer) {
        if (answer == questions[qno].correct){
            marks[qno] = 1
        }
        else{
            marks[qno] = 0
        }
            
    }
    var total = 0
    for (i = 0; i < marks.length; i++) {
        total = total + marks[i]
    }
    document.getElementById('container').style.display = 'none'
    document.getElementById('resultdiv').style.display = 'block'
    document.getElementById('result').innerHTML = total
    console.log(marks)
}
document.getElementById('restart').addEventListener('click', function () {
    document.getElementById('resultdiv').style.display = 'none'
    document.getElementById('start').style.display = 'block'
    qno = 0
    marks = [0,0,0,0,0]
    unchecked()
})




