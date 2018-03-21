// i just want to show 2 questions and record score

$(document).ready (function(){

    //global variables
    //questions data
    let questions = [
        {
            "question": "'Newfie' is the abbreviation for what breed?",
            "answers": ["pitbull", "kangal", "Newfoundland"],
            "correctAnswer":"Newfoundland",
            "image": "hello world"
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

    //funtions
    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
  
      //  The decrement function.
      function decrement() {
  
        //  Decrease number by one.
        number--;
  
        //  Show the number in the #show-number tag.
        $("#show-number").html("<h2>" + number + "</h2>");
  
  
        //  Once number hits zero...
        if (number === 0) {
  
          //  ...run the stop function.
          stop();
        }
      }

      let currentTime=30

    function startGame(){
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

        // Add hide timer here
        $(".js-start").hide();
    }
        // add timer here
    function timer(){
        $('.timer').text(currentTime);
        setInterval(function(){
            currentTime-=1;
            $('.timer').text(currentTime);
        }, 1000);
    }

 
    


    //events
    

    //click start button will start the game
    $('.js-start').on('click', function(){
        //execute instructions
        startGame();
        timer();
    });


    

    //click stop button to see score

    // $('.js')
    // timer runs out to end game and show score


});