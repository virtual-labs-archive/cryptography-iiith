<script language="JavaScript" type="text/javascript" src="../js/exp10/base64.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/jsbn.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/jsbn2.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/prng4.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/rng.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/rsa.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/rsa2.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/pkcs.js"></script>
  <script language="JavaScript" type="text/javascript" src="../js/exp10/rss.dss.js"></script>
<?php

include('../simple_html_dom.php');

$html = file_get_html('./content.html');
	
if(!isset($_GET["section"])) $section = "Introduction"; 
else $section = $_GET["section"];
// Find all images

$labheaderheading =$html->getElementById("experiment-header-heading")->innertext;
$labarticleheading =$html->getElementById("experiment-article-heading")->innertext;
		
 foreach($html->find('section') as $element) {
	 $nav[] = array('heading' => $html->getElementById($element->id."-heading")->innertext,'img'=> $html->getElementById($element->id."-icon")->innertext);

//echo $html->getElementById($element->id."-icon")->innertext->find('section');
 // echo $html->getElementById($element->id."-heading")->plaintext."-";
// echo $section."=";
// echo strcasecmp(trim($section),trim($html->getElementById($element->id."-heading")->plaintext)).",";
	  if(strcasecmp(trim($section),trim($html->getElementById($element->id."-heading")->plaintext))==0)
	 {
	   //    $nav[] = array('heading' => $html->getElementById($element->id."-heading")->innertext,'img'=> $html->getElementById($element->id."-icon")->innertext);
	   $data['SubHeading'] =$html->getElementById($element->id."-heading")->innertext;
	   $data['SubContent'] =$html->getElementById($element->id."-content")->innertext;
		  // echo "<b>Section: </b>".$element->id . '<br><hr>';
	   // echo "<b>Icon: </b>".$html->getElementById($element->id."-icon")->innertext."<br>";
	   // echo "<b>Heading:</b> ".$html->getElementById($element->id."-heading")->innertext."<br>";
	   // echo "<b>Content: </b>".$html->getElementById($element->id."-content")->innertext."<br><br><br>";
	 } 
	   
	
}
$data['nav'] = $nav;
//print_r($nav);



$vlab_url = "http://virtual-labs.ac.in/"; 
$css_js   = "../"; 
$lab_url  = "../index.php";
$exp_url  =  "./index.php";
$base_url = $exp_url;

include('../exp_template.php');

?>



