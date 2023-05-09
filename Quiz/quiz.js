const quizData = [{
    question: "What drink is the most popular in the morning?",
    an_a: "tea",
    an_b: "milk",
    an_c: "coffee",
    an_d: "vodka",
    correct: "an_c"
},
{
    question: "What is the country with the largest population?",
    an_a: "China",
    an_b: "India",
    an_c: "USA",
    an_d: "Russia",
    correct: "an_b"
},
{
    question: "What is the most popular programming language?",
    an_a: "JacaScript",
    an_b: "Python",
    an_c: "C",
    an_d: "SQL",
    correct: "an_a"
},
{
    question: "What is the largest company in the world by capitalisation?",
    an_a: "McDonald's",
    an_b: "Coca Cola",
    an_c: "Tesla",
    an_d: "Apple",
    correct: "an_d"
}];

let currentQ = 0;
const Qtext = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById("btn");

loadQuiz();

function loadQuiz(){
    const currentQuiz = quizData[currentQ];
    Qtext.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.an_a;
    b_text.innerHTML = currentQuiz.an_b;
    c_text.innerHTML = currentQuiz.an_c;
    d_text.innerHTML = currentQuiz.an_d;
}

// while(currentQ < quizData.length){
//     btn.addEventListener("click", () =>{
//         const clicked = () => {
//             const clicked = document.getElementsByName("answer");
//             for(let i = 0; i < clicked.length; i++){
//                 if (clicked[i].checked){
//                     return true;
//                 }
//             }
//             return false;
//         };
//         if(clicked){
//             currentQ++;
//             loadQuiz();
//         }else{
//             const error = document.getElementById('error');
//             error.innerHTML = "Choose answer";
//         };
//     });
// };

// while(currentQ < quizData.length){
//     console.log(currentQ, quizData.length);
//     btn.addEventListener("click", () => {

//     })
//     currentQ++;
// };

btn.addEventListener("click", () =>{
    const answerChosen = () => {
        const clicked = document.getElementsByName("answer");
        for(let i = 0; i < clicked.length; i++){
            if (clicked[i].checked){
                return true;
            }
        }
        return false;
    };

    if(answerChosen()){
        const error = document.getElementById('error');
        error.innerHTML = "";
        currentQ++;
        loadQuiz();
    }else{
        const error = document.getElementById('error');
        error.innerHTML = "Choose answer";
    };
});