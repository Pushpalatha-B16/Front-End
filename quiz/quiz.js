const questions=[
    {
    question:"HTML is considered as which language",
    answer:[
        {text: "programming language",correct:false},
        {text:"markup language",correct:true},
        {text:"oop language",correct:false},
        {text:"high level language",correct:false}]},
   { question:"What is the usage of alt value in <img> tag?",
    answer:[{text:"Alternative text for an Image", correct:true},
        {text:"Alternative source of an Image",correct:false},
        {text:" Caption of an Image" ,correct:false},
        {text:"All",correct:false}]},
    {question:"CSS is an acronym for",
    answer:[{text:"Cascading Style Sheet",correct:true},
        {text:"Costume Style Sheet",correct:false},
        {text:" Cascading System Style",correct:false},
        {text:"None of the Above",correct:false}
    ]},
   { question:"Which of the following CSS property is used to add shadows to the text",
    answer:[{text:"text-shadow", correct:true},
        {text:"text-stroke", correct:false},
        {text:"text-overflow", correct:false},
        {text:"text-decoration", correct:false}]},
       { question:"Which of the following tag is used to embed css in html page?",
        answer:[{text:"style tag", correct:true},
            {text:"css tag", correct:false},
            {text:"script tag", correct:false},
            {text:"none", correct:false}]},

    ]
    const task=document.getElementById("qtn")
    const result=document.getElementById("answers")
    const next=document.getElementById("nBtn")
    let currentIndex=0;
    let score=0;
    function startQuiz(){
        currentIndex=0;
         score=0;  
         next.innerHTML="Next";
         showQuiz()
    }
    
    
    function showQuiz(){
       
        resetState();
        let currentQuestion=questions[currentIndex];
        let questionNo=currentIndex+1;
        task.innerHTML=questionNo+"."+currentQuestion.question;
        currentQuestion.answer.forEach((ans)=>{
            const button=document.createElement("button");
            button.innerHTML=ans.text;
            button.classList.add("btn");
            result.appendChild(button);
            if(ans.correct){
                button.dataset.correct=ans.correct;
            }
            button.addEventListener("click",selectAnswer);
        });
    }
    
    function resetState(){
        
        while(result.firstChild){
           result.removeChild(result.firstChild);}
    }
    function selectAnswer(e){
        const selectBtn=e.target;
        const isCorrect=selectBtn.dataset.correct==="true";
        if(isCorrect){
            selectBtn.classList.add("correct");
            score++;
            }else{
            selectBtn.classList.add("incorrect");
        }
        Array.from(result.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct")
            }
            button.disabled="true"
        });
      next.style.display="block";
    }
    function showScore(){
        resetState();
        task.innerHTML=`you scored ${score} out of ${questions.length}`; 
        next.innerHTML="PlayAgain";
        next.style.display="block";
    }
    function handleNextButton(){
        currentIndex++;
        if(currentIndex<questions.length){
            showQuiz();
        }else{
            showScore();
        }
    }
    
   
    next.addEventListener("click",()=>{
        if(currentIndex<questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }

    });
    startQuiz();