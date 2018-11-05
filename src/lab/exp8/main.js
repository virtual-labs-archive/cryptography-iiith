function check(){
	var Q1=document.quiz.q1.value;
	var Q2=document.quiz.q2.value;
	var Q3=document.quiz.q3.value;

	var c=0;
	if(Q1==="1"){
		c++;
	}
	if (Q2==="2") {
		c++;
	}
	if(Q3==="2"){
		c++;
	}
	window.alert("You got "+c+" correct!");
}
