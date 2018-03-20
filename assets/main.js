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
            "question": "What is Homers favorite snack?",
            "answers": ["Beer", "Donuts", "Salad", "Hummus"],
            "correctAnswer": "Donuts",
        }
        {
            "question": "What is Homers favorite snack?",
            "answers": ["Beer", "Donuts", "Salad", "Hummus"],
            "correctAnswer": "Donuts",
        }
        {
            "question": "What is Homers favorite snack?",
            "answers": ["Beer", "Donuts", "Salad", "Hummus"],
            "correctAnswer": "Donuts",
        }
    ];
    let userAnswers = [];

    //funtions
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
    }

    function stopGame(){
        for (let i=5; i < questions.length; i++){
            
        }
    }


    //events
    

    //click start button will start the game
    $('.js-start').on('click', function(){
        //execute instructions
        startGame();
    });

    //click stop button to see score

    // $('.js')
    // timer runs out to end game and show score


});