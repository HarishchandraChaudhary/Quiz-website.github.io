const quizDb=[
{
    question :"Q1: what is the full form of HTML?",
    a:"Hello To My Land",
    b:"Hey Text Markup Language",
    c:"HyperText Markup Language",
    d:"Hypertext Markup Language",
    ans:"ans4"
},
{
    question :"Q2 : what is the full form of css?",
       a:"Cascading Style Sheet",
       b:"Cascading Style Sheep",
       c:"Cartton Style Sheets",
       d:"Cascading Super Sheet",
       ans:"ans1"

},
{
    question:"Q3: what is full form of HTTP?",
    a:"Hypertext Transfer Product",
    b:"Hypertext Test Protocol",
    d:"Hypertext Transfer Protocol",
    ans:"ans4"
},
{
    question:"Q4: what is the full form of JS?",
    a:"JavaScript",
    b:"Javasuper",
    c:"JustScript",
    d:"JordenShoes",
    ans:"ans1"
}
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let questionCount = 0;
let score=0;
const loadQuestion=()=>{

    const questionList=quizDb[questionCount];
question.innerText=questionList.question;

option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;

}
loadQuestion();

 const getCheckAnswer=()=>{
     let answer;

     answers.forEach((curAnsElem)=>{
      if(curAnsElem.checked){
          answer=curAnsElem.id;
      }
     });
     return answer;
 };

 const deselectAll =()=>{
     answers.forEach((curAnsElem)=>curAnsElem.checked=false);
 }
 submit.addEventListener('click',()=>{
     const checkedAnswer=getCheckAnswer();
     console.log(checkedAnswer);
     if(checkedAnswer===quizDb[questionCount].ans){
         score++;
     };
     questionCount++;

     deselectAll();
    if(questionCount <quizDb.length){
        loadQuestion();
    }else{
     showScore.innerHTML =`
     <h3> You scored  ${score}/${quizDb.length}</h3>

     <button class="btn" onclick="location.reload()">play again</button>
     `;
     
showScore.classList.remove('scoreArea');

    }
 });