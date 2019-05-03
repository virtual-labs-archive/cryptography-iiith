function checkAnswer(q_name, ans) {
    var q = document.getElementsByName(q_name)
    var valid = false
    var i = 0
    while (!valid && i < q.length) {
        if(q[i].checked && i == (ans-1))
            valid = true
        i++
    }
    return valid
}

var question_id = new Array("quest_581", "quest_593", "quest_589")
var ans_id = new Array("q1", "q2", "q3")
var answers = new Array(3, 1, 4);

function gradeQuiz() {
    var i;
    for(i=0; i<answers.length; i++) {
        if(checkAnswer(question_id[i], answers[i])) {
            var temp = document.getElementById(ans_id[i])
            temp.style.display="block"
            temp.innerHTML="Correct"
            temp.style.color="Green"
        }
        else {
            var temp = document.getElementById(ans_id[i])
            temp.style.display="block"
            temp.innerHTML="Incorret, The right answer is option " + answers[i] 
            temp.style.color="Red"
        }
    }
}
