const quizData = [{
    question: "What drink is the most popular in the morning?",
    an_a: "tea",
    an_b: "milk",
    an_c: "coffee",
    an_d: "vodka",
    correct: "c"
},
{
    question: "What is the country with the largest population?",
    an_a: "China",
    an_b: "India",
    an_c: "USA",
    an_d: "Russia",
    correct: "b"
},
{
    question: "What is the most popular programming language?",
    an_a: "JavaScript",
    an_b: "Python",
    an_c: "C",
    an_d: "SQL",
    correct: "a"
},
{
    question: "What is the largest company in the world by capitalisation?",
    an_a: "McDonald's",
    an_b: "Coca Cola",
    an_c: "Tesla",
    an_d: "Apple",
    correct: "d"
}];

let currentQ = 0;
const Qtext = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

let correctAnswers = 0;
const qLength = quizData.length;

loadQuiz();

btn.addEventListener("click", () =>{
    const answerChosen = () => {
        const clicked = document.getElementsByName("answer");
        for(let i = 0; i < clicked.length; i++){
            if (clicked[i].checked){
                checkAnswer(clicked[i].value);
                clicked[i].checked = false;
                return true;
            }
        }
        return false;
    };

    if(answerChosen()){
        const error = document.getElementById('error');
        error.innerHTML = "";
        currentQ++;
        if (currentQ < qLength){
            loadQuiz();
        }
        else{
            const finalResult = document.getElementById("quiz")
            finalResult.innerHTML = `<h3 class="final-result">Thank you! Your final result is ${correctAnswers}/${qLength}
            </h3><button class="btn" onclick="location.reload()">Try again</button>`;
            // alert("Correct answers: " + correctAnswers + `/${qLength}`);
        };
    }else{
        const error = document.getElementById('error');
        error.innerHTML = "Choose an answer";
    };
});

function loadQuiz(){
    const currentQuiz = quizData[currentQ];
    Qtext.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.an_a;
    b_text.innerHTML = currentQuiz.an_b;
    c_text.innerHTML = currentQuiz.an_c;
    d_text.innerHTML = currentQuiz.an_d;
}

function checkAnswer(ans){
    const correct = quizData[currentQ].correct;
    if (ans === correct){
        correctAnswers++;
    }
}