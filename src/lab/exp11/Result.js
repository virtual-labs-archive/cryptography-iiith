function score()
{
	var form = document.forms["quiz"];
	var win = window.open("","win","width=200,height=300,scrollbars");
	win.focus();
	win.document.open();
	win.document.write('<title>ANSWERS</title>');
	win.document.write('<body bgcolor="#FFFFFF">');
    win.document.write('<center><h3>Score</h3></center>');
         var Q1=document.quiz.q1.value;
         var Q2=document.quiz.q2.value;
         var Q3=document.quiz.q3.value;
         var Q4=document.quiz.q4.value;
        
         var count=0;
        if(Q1=="2")
         {
           count++;
         }
        if(Q2=="2")
         {
            count++;
         }
         if(Q3=="1")
         {
            count++;
         }
        if(Q4=="1")
         {
            count++;
         }
        
         
         win.document.write("Your Score:");
         win.document.write(count+"<br>");  
        win.document.write('<center><h3>Answers</h3></center>');
        win.document.write("Q1)Confidentiality"+"<br>"+"Q2)Public Key"+"<br>"+"Q3)Private Key"+"<br>"+"Q4)Yes");
}