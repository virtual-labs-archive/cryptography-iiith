<?php
$total=0;
$quest_590 = $_POST['quest_590'];
$quest_591 = $_POST['quest_591'];
$quest_594 = $_POST['quest_594'];
$quest_582 = $_POST['quest_582'];
//$q5 = $_POST['q5'];

echo "<h4>You answered the following questions correctly :</h4> ";
if ($quest_590=="Strong-collision-resistance ")
{
$total=$total+1;
echo "<b>1,  </b>";
}
if ($quest_591=="One-wayness"){
$total= $total+1;
echo "<b>2,</b>  ";
}
if ($quest_594=="(2, 16)")
{
$total=$total+1;
echo "<b>3,</b>  ";
}
if ($quest_582=="Converting any fixed-length collision resistant hash function to an arbitrary length collision resistant hash function ")
{
$total=$total+1;
echo "<b>4</b>  ";
}
/*if ($q5==0)
{
$total=$total+1;
echo "<b>5</b>  ";
}*/
echo "\n\n\n\n";

//echo "<html>
//<head></head>";
//echo "<body class=\"page_bg\">";
//echo "<br>Total number of correct answers : ".$total."/5";
//echo "<br>Percentage: (".$total."/5")*100;
//echo "<form action="answers.php" method="post" name="ans" onsubmit='return window.confirm("You are submitting information to an external page. \nAre you sure?");' target="_blank">
//<input type="submit" name="submit" value="Answers">  
//</form>"
/*echo '	<h1>Correct Answers</h1>
<br>
<b>Q1.</b>
                <b>In MIPS we can increment the contents of a memory location in a single instruction. </b><br>
                A.True<br>
                <br>
<b>Q2.</b>      <b> The maximum size of an immediate constant in add instruction is 0xFFFFFF. </b> <br>A.True <br>
                  <br>
<b>Q3.</b>                
                <b> Register $r0 always contains a zero value.</b><br>
               A.False<br>
                <br>
<b>Q4.</b>                
                <b> ADDIU can generate a  overflow trap.</b><br>
               A.True<br>
                <br>
				<b>Q5.</b>                
                <b>We can use LB instruction to load a signed byte into a register and cast the signed byte to a signed word.</b><br>
               A.False<br>
                <br>
</ol>';
echo "
</body>
</html>";*/
?>
<body bgcolor="#E6E6FA">
<br>
<br>
<br>
<br>
<h3><em>Click here for answers!</em></h3>

<form action="answers.php" method="post" name="ans" target="_blank">
<input type="submit" name="submit" value="Answers">  
</form>
</body>
