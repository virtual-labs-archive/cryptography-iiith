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

var question_id = new Array("quest_644", "quest_645", "quest_646", "quest_647")
var ans_id = new Array("q1", "q2", "q3", "q4")
var answers = new Array(2, 1, 1, 2);

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
