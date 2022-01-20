document.getElementById("submit").addEventListener("click", function () {

    //set the user inputs equal to variables 
    assmt = $("#assignment").val()
    proj = $("#project").val()
    quiz = $("#quiz").val()
    exam = $("#exam").val()
    intex = $("#intex").val()

    //calculate the grade

    grade = Math.round((assmt * .55) + (proj * .05) + (quiz * .10) + (exam * .20) + (intex * .10), 2)

    //run through the grade ranges and determine what the final letter grade is
    //put out an alert that gives the user their final grade
    if (grade >= 94 && grade <= 100) {
        alert("Woohoo! You got an A\n" + grade);

    } else if (grade >= 90 && grade < 94) {
        alert("Congrats! You got an A-\n" + grade);

    } else if (grade >= 87 && grade < 90) {
        alert("Great! You got a B+\n" + grade);

    } else if (grade >= 84 && grade < 87) {
        alert("Good job! You got a B\n" + grade);

    } else if (grade >= 80 && grade < 84) {
        alert("Nice work! You got a B-\n" + grade);

    } else if (grade >= 77 && grade < 80) {
        alert("You got a C+\n" + grade);

    } else if (grade >= 74 && grade < 77) {
        alert("You got a C\n" + grade);

    } else if (grade >= 70 && grade < 74) {
        alert("You got a C-\n" + grade);

    } else if (grade >= 67 && grade < 70) {
        alert("Ouch! You got a D+\n" + grade);

    } else if (grade >= 64 && grade < 67) {
        alert("Better luck next time! You got a D\n" + grade);

    } else if (grade >= 60 && grade < 64) {
        alert("Uh oh! You got a D-\n" + grade);

    } else if (grade < 60) {
        alert("You failed with an E\n" + grade);

    } else {
        alert("Enter grades less than or equal to 100")
    }
})
