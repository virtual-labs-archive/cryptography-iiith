function trim(str) {
    return str.replace(/\s+/g,"");
}

function ShiftEncrypt(src, dst) {

    var plaintext = document.getElementById(src).value.toLowerCase();  
    if(plaintext.length < 1){ alert("please enter some plaintext"); return; }    
    var shift = parseInt(document.getElementById("shiftKey").value);
    var ciphertext = "";    var re = /[a-z]/;
    for(var i=0; i<plaintext.length; i++){ 
        if(re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + shift)%26 + 97); 
        else ciphertext += plaintext.charAt(i); 
    } 
    document.getElementById(dst).value = ciphertext; 
} 
 
function ShiftDecrypt(src,dest) {

    var ciphertext = document.getElementById(src).value.toLowerCase();  
    // do some error checking 
    if(ciphertext.length < 1){ alert("please enter some ciphertext (letters only)"); return; }    
    var shift = parseInt(document.getElementById("shiftKey").value);
    var plaintext = "";    var re = /[a-z]/;
    for(var i=0; i<ciphertext.length; i++){ 
        if(re.test(ciphertext.charAt(i))) plaintext += String.fromCharCode((ciphertext.charCodeAt(i) - 97 + 26 - shift)%26 + 97); 
        else plaintext += ciphertext.charAt(i); 
    } 
    document.getElementById(dest).value = plaintext; 
}

var ciphers = ["haahjr ha khdu",
		"wkh srufxslqh lv xqghu wkh vkhhwv",
		"WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ",
		"ymnx nx ymj ktwjxy uwnrjafq",
		"esp bflwtej zq xpcnj td yze decltypo",
		"owlzwhwghdwgxlzwmfalwvklslwk"];
var answers = ["attack at dawn",
		"the porcupine is under the sheets",
		"the quick brown fox jumps over the lazy dog",
		"this is the forest primeval",
		"the quality of mercy is not strained",
		"wethepeopleoftheunitedstates"];
var shiftIndices = [7, 3, 3, 5, 11, 18];
var currentCipher=0;
function NextShiftTest() {
        currentCipher = currentCipher+1;
    
    if (currentCipher > (ciphers.length-1)) {
	currentCipher=0;
    }
    document.getElementById("textarea").value = ciphers[currentCipher];
} 

function CheckAnswer() {
	if (trim(document.getElementById("textarea3").value.toLowerCase()) === trim(answers[currentCipher]) && document.getElementById("selectAnsShift").selectedIndex === shiftIndices[currentCipher]) {
		document.getElementById("notification").value = "CORRECT!!";
	} else {
		document.getElementById("notification").value = "This is not correct, Please try again!";
	}
}
