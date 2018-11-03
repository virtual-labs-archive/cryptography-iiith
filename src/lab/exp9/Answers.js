function maarks()
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
        if(Q1=="3")
         {
           count++;
         }
        if(Q2=="4")
         {
            count++;
         }
         if(Q3=="4")
         {
            count++;
         }
        if(Q4=="2")
         {
            count++;
         }
         

         win.document.write("Your Score:");
         win.document.write(count+"<br>");  
        win.document.write('<center><h3>Answers</h3></center>');
        win.document.write("Q1)26"+"<br>"+"Q2)2"+"<br>"+"Q3)105"+"<br>"+"Q4)24");
}