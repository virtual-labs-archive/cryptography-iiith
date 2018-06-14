<?php
$total=0;
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];
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
if($q4==4){
        $total=$total+1;
echo "4 ";
}

echo "\n\n\n\n";
echo "<html>
<head></head>";
echo "<body class=\"page_bg\">";
echo "<br>Total number of correct answers : ".$total."/4";
echo '	<h2>Correct Answers</h2>
<br>
<b>Q1.</b>
                <b>In DES input, key length ___ bits and plaintext length ___ bits.</b><br>
                56 bit key length, 64 bit plaintext<br>
                <br>
<b>Q2.</b>                
                <b>DES stands for _________ and AES stands for __________</b><br>
                Data Encryption Standard, Advanced Encryption Standard<br>
                <br>
<b>Q3.</b>                
                <b>DES has an initial and final permutation block and ____ rounds</b><br>
                16<br>
                <br>
<b>Q4.</b>                
                <b>In DES the length of each round key?</b><br>
                48 bits<br>
                <br>

</ol>';
echo "</body></html>";
?>
