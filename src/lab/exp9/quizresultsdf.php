<?php
$total=0;
$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];

echo "You answered the following questions correctly : ";
if ($q1==3)
{
$total=$total+1;
echo "1 ";
}
if ($q2==4)
{
$total=$total+1;
echo "2 ";
}
if($q3==4){
	$total=$total+1;
echo "3 ";
}
if($q4==2){
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
<ol>
<li>
                <b>101 <sup>4,800,000,023</sup> mod 35</b></li>
                26 <br>
                <br>                
                <li><b>Which among these is a generator of Z<sup>*</sup><sub>13</sub></b></li>
                2<br>
                <br>                
                <li><b>The set of quadratic residues modulo 211 has cardinality of</b></li>
                105<br>
                <br>                
                <li><b>N=90 then Ø(n) =? Where Ø(n) is the number of elements co-prime to ‘n’ [Ø(n) is also called Euler Totient function]</b></li>
                24<br>
                <br>




</ol>';
echo "</body></html>";
?>
