$(document).ready (function(){

     //click start button will start the game
    $('.js-start').on('click', function(){
         //execute instructions
         setUpGame();
         timer();
    });

    //global variables
    //questions data
    let questions = [
        {
            "question": "'Newfie' is the abbreviation for what breed?",
            "answers": ["pitbull", "kangal", "Newfoundland"],
            "correctAnswer":"Newfoundland",
            
        }, 
        {
            "question": "What is the typical height and weight of a male Newf?",
            "answers": ["4ft, 100lbs/45kg", "4.5feet, 130lbs/59kg", "5ft, 160lbs/70kg", "yes, all of the above"],
            "correctAnswer": "yes, all of the above",
        },
        {
            "question": "Are Newfies the best swimming breed?",
            "answers": ["yes", "no", "not sure"],
            "correctAnswer": "yes",
        },
        {
            "question": "What is a Newfie's favorite snack?",
            "answers": ["Beer", "Donuts", "Salad", "Hummus", "yes"],
            "correctAnswer": "Donuts",
        }
    ];

    let userAnswers = [];
    let correct = 0;
    let incorrect =0;
    let unanswered =0;

    //displaying questions on the HTML page.
    function setUpGame(){
        // console.log('game');
        // populate questios div
        for (let i=0; i<questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');
    
            // loop through answers
    
            for (let j=0; j < questions[i].answers.length; j++) {
                console.log(questions[i].answers[j]);
                $('.js-questions').append('<input type="radio" value= "' + questions[i].answers[j] + '" name="a' + i + '">' + questions[i].answers[j] +'</input>');
            }
            $('.js-questions').append('<br><hr>');
        }
    // create an end button
            let button = $("<button>");
            button.attr("id","submit");
            button.append("End")
            $(".js-submit").append(button)
    
            // When user presses start, the start button disappears.
            $(".js-start").hide();
        }
    let currentTime=10

    // add timer here
    function timer(){
        $('.timer').text(currentTime);
        var timerInterval=setInterval(function(){
            if (currentTime== 0){
                //calling the functions for checkanswers and clearInterval
                clearInterval(timerInterval);  
                checkanswers(); 
            }

            if(currentTime >0) {
                currentTime-=1;
                $('.timer').text(currentTime);
            }
        }, 1000);

            //click stop button to see score

    $('.js-submit').on('click',"#submit", function(){
        //execute instructions
       console.log("click!!")
       clearInterval(timerInterval); 
       checkanswers()
    });
    }

//evaluating user's inputs to tally results.

    function checkanswers(){
    //from each radio button below we get the user's input value

    userAnswers.push($("input:radio[name=a0]:checked").val())
    userAnswers.push($("input:radio[name=a1]:checked").val())
    userAnswers.push($("input:radio[name=a2]:checked").val())
    userAnswers.push($("input:radio[name=a3]:checked").val())

    console.log(userAnswers)
//looping thru each user answers. 
    for (var i=0; i<userAnswers.length;i++){
        if (userAnswers[i]===questions[i].correctAnswer){
            correct++
        }
        //otherwise check below if user answers is equal to null (if the user didn't select one radio value.)
    else if (userAnswers[i]==null){
        unanswered++
    }   
    //increment incorrect answers (tally incorrect results)
    else {
        incorrect++
    }
    //hide the questions and answers and append the number of correct answers, incorrect answers and the unanswered questions. This happens after the timer hits zero or the user hits submit.
    
    }
console.log("correct:", correct, "unanswered:", unanswered, "incorrect:", incorrect);

//displaying results to user, we are asking for the element from the HTML that has the classname 'results' then append (add HTML code)
$('.results').append('<p>RESULTS!</p>');
$('.results').append('<p> correct:' + correct + '</p>');
$('.results').append('<p> unanswered:' + unanswered + '</p>');
$('.results').append('<p> incorrect:' + incorrect + '</p>');

//when the game is finished we want to hide the div relating to questions.
$(".game").hide();

}
    // $('.js')
    // timer runs out to end game and show score


});