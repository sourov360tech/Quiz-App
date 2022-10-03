const Start_QuizBtn = document.getElementById('Start_Quiz');
const RulesBox = document.querySelector('.RulesBox');
const ExitBtn = document.getElementById('ExitBtn');
const ContinueBtn = document.getElementById('ContinueBtn');
const QuestionSec = document.querySelector('.QuestionSec');

const TimeCount = document.querySelector('.TimeCount .Seconds');

const TimeLineCounter = document.querySelector('.TimeLineCounter');


Start_QuizBtn.addEventListener('click', function(){
    RulesBox.classList.add("ActiveRulesBox");
    
});

ExitBtn.addEventListener('click', function(){
    RulesBox.classList.remove("ActiveRulesBox");
});

ContinueBtn.addEventListener('click', function(){
    // RulesBox.classList.remove("ActiveRulesBox");
    QuestionSec.classList.add("ActiveQuestionSec");

    showQuestion(0);
    startTimer(timeValue);
    startTimerLine(0)
    

});

const NextBtn = document.querySelector('.NextBtn');

const result_box = document.querySelector('.resultBox');
const restart_quiz = document.querySelector('.result_Buttons .re_playBtn');
const quit_quiz = document.querySelector('.result_Buttons .quitBtn');
const TimesUp = document.querySelector('.TimesUp');

quit_quiz.addEventListener('click', function(){
    window.location.reload();
});

// Need to fixing>>>>>!!!!!!


// restart_quiz.onclick = ()=> {
   

//     result_box.classList.remove("activeResult");
//     QuestionSec.classList.add("ActiveQuestionSec");

    

//     showQuestion(0);
//     startTimer(timeValue);
//     startTimerLine(0)
    

//     NextBtn.style.display = "none";

// }





let que_count = 0;
let counter;
let timeValue = 15;  // Dynamic Main Input***

let counterLine;
let widthValue = 1;
let userScore = 0;





NextBtn.addEventListener('click', function questionPage(){
    if(que_count < question.length -1){
        que_count ++
        showQuestion(que_count);
        
        clearInterval(counter);
        startTimer(timeValue);

        clearInterval(counterLine);
        startTimerLine(widthValue);

        NextBtn.style.display = "none";

        option_list.classList.remove("disabled");
        TimesUp.style.display = "none"

    }else{

        showResultBox() 

        // console.log("you have completed");

    }
});






function showQuestion(index) {
    const que_Title = document.querySelector('.QuestionTitle');

    option_list = document.querySelector('.MyOptions');
    let option_tag = 
                    '<div class="Option">'+ question[index].option[0] +'</div>'
                    +'<div class="Option">'+ question[index].option[1] +'</div>'
                    +'<div class="Option">'+ question[index].option[2] +'</div>'
                    +'<div class="Option">'+ question[index].option[3] +'</div>'

    let que_tag = "<span>" + question[index].number + '.' + question[index].question + "</span>";

    que_Title.innerHTML = que_tag;

    option_list.innerHTML = option_tag;

    const total_que = document.querySelector(".Total_Que");
    let total_QueTag = '<p>' + question[index].number + ' of '+ question.length +' </p>'
    total_que.innerHTML = total_QueTag;



    const option = option_list.querySelectorAll(".Option")
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

}

let tickIcon = '<div class="tick icon"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="tick icon"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine)
    let userAns = answer.textContent;
    let correctAns = question[que_count].answer; 
    let allOptions = option_list.children.length;

    if(userAns == correctAns){
        
        userScore +=5 ;

        // console.log(userScore)

        answer.classList.add("CorrectAns");

        answer.insertAdjacentHTML("beforeend", tickIcon);

        // console.log("Correct Answer")

    }else{
        
        answer.classList.add("IncorrectAns");

        answer.insertAdjacentHTML("beforeend", crossIcon);
        

        for(let i = 0; i <  allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "Option CorrectAns");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);

            }
        }

        // console.log("Wrong Answer")
       
    }

    for(let i = 0; i<allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }

    NextBtn.style.display = "block";


}


function showResultBox(){
    RulesBox.classList.remove("ActiveRulesBox");
    QuestionSec.classList.remove("ActiveQuestionSec");
    result_box.classList.add("activeResult");

    const scoreText = document.querySelector('.score_text');

    let totalScore = question.length * 5;

    if(userScore > 10){

        let scoreTag = '<div> Congratulations🥰 You got <span>'+ userScore +'</span> Out of <span>'+ totalScore +'</span> </div>';
        scoreText.innerHTML = scoreTag

    }else if(userScore >= 5){

        let scoreTag = '<div> Carry On👍 You got <span>'+ userScore +'</span> Out of <span>'+ totalScore +'</span> </div>';
        scoreText.innerHTML = scoreTag

    }else{
        let scoreTag = '<div> I am Sorry😑 You got <span>'+ userScore +'</span> Out of <span>'+ totalScore +'</span> </div>';
        scoreText.innerHTML = scoreTag
    }
}


function startTimer(time, answer){
    counter = setInterval(timer, 1000);
    function timer(){
        TimeCount.textContent = time;
        time--

        if(time < 9){
            let addZero = TimeCount.textContent;
            TimeCount.textContent = 0 + addZero;
        }
        if(time < 0){
            clearInterval(counter)
            TimeCount.textContent = "00";

            NextBtn.style.display = "block";

            option_list.classList.add("disabled");

            

            TimesUp.style.display = "block"
        
           
        }
    }
}


// TimeLineCounter by Pixel

// function startTimerLine(time){
//     counterLine = setInterval(timer, 50);
//     function timer(){
//         time += 1;
//         TimeLineCounter.style.width = time + "px";
//         if(time > 319){
//             clearInterval(counterLine);
//         }
//     }
// }


// TimeLineCounter by Percent %

function startTimerLine(time){
    counterLine = setInterval(timer, 1000);
    function timer(){
        time += 6.655;
        TimeLineCounter.style.width = time + "%";
        if(time > 99){
            clearInterval(counterLine);
        }
    }
}






document.addEventListener("contextmenu", function(sourov360tech){

    sourov360tech.preventDefault();

});


