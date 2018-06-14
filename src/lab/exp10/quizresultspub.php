<?php
$total=0;
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
echo "You answered the following questions correctly : ";
if ($q1==1)
{
$total=$total+1;
echo "1 ";
}
if ($q2==2)
{
$total=$total+1;
echo "2 ";
}
if($q3==2){
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
                <b>Let p = 17, q = 11 and N = pq. If (in the public-key) e= 7, then a possible value for the trap-door d (in the private-key) in an RAS cryptosystem is</b><br>
                22 <br>
                <br>
<b>Q2.</b>                
                <b>Encrypt the message m = 57 with the textbook RSA with the public key pk = N= 253, e = 3</b><br>
                250<br>
                <br>
<b>Q3.</b>                
                <b>In Asymmetric-Key cipher, the sender uses the _____ key</b><br>
                Public<br>
                <br>

</ol>';
echo "</body></html>";
?>
