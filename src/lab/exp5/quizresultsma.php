<?php
$total=0;
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
echo "You answered the following questions correctly : ";
if ($q1==4)
{
$total=$total+1;
echo "1 ";
}
if ($q2==2)
{
$total=$total+1;
echo "2 ";
}
if($q3==3){
	$total=$total+1;
echo "3 ";
}

echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";
echo "<br>Total number of correct answers : ".$total."/3";
echo '	<h2>Correct Answers</h2>
<br>
<b>Q1.</b>
                <b>If a MAC tag is K-bits long, how much work is needed to find a collision to that specific value.</b><br>
                K^K<br>
                <br>
<b>Q2.</b>                
                <b>The out put length of SHA â I is _____________ bits</b><br>
                160<br>
                <br>
<b>Q3.</b>                
                <b>3. Best way to achieve both privacy and message integrity</b><br>
                Encrypt then Authenticate<br>
                <br>

</ol>';
echo "</body></html>";
?>
