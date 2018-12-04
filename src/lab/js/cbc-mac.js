
function trim(str) {
    return str.replace(/\s+/g,"");
}

var currentL=4;
var currentFunction="1100";
//var l = 3;

function validateBinary(input) {
    var len = input.length;
    var i;
    for(i=0;i<len;i++) {
	if(input.charAt(i) != "0" && input.charAt(i) != "1") {
	    break;
	}
    }
    if (i<len) {
	return 0;
    }
    return 1;
}

function isUnsignedInteger(s) {
  return (s.toString().search(/^[0-9]+$/) == 0);
}

function randSequence(len){
    ret="";
    for(i=0; i<len; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2;
    }
    return ret;
}

function XOR(a, b) {
    if((a == "0" && b == "0"))
        return "0";
    else if((a == "0" && b == "1"))
        return "1";
    else if((a == "1" && b == "0"))
        return "1";
    else if((a == "1" && b == "1"))
        return "0";
    return "0";
}

function EQV(a, b) {
    if((a == "0" && b == "0"))
        return "1";
    else if((a == "0" && b == "1"))
        return "0";
    else if((a == "1" && b == "0"))
        return "0";
    else if((a == "1" && b == "1"))
        return "1";
    return "1";
}

function xorStrings(a, b) {
	if(a.length != b.length) {
		alert("Error calculating XOR");
		return;
	}
	var output = "";
	for (var i=0; i<a.length; i++) {
		if(a[i] == b[i]) {
			output += "0";
		} else {
			output += "1";
		}
	}
	return output;
}

function nextPlainText() {
    var len = Math.random()*100%100;
    document.getElementById("plaintext").value = randSequence(len);
}

function nextKey() {
    var len = Math.random()*100%100;
    document.getElementById("key").value = randSequence(len);
}

function nextIV() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    var textSize = document.getElementById("plaintext").value.length;
    if (textSize > 2*l) {
    	currentL = l;
	currentFunction = nextFunction(l);
    } else {
	alert("l should not be greater than the (length of plaintext)/2");
        document.getElementById("l").value = currentL;
	return;
    }
    document.getElementById("iv").value = randSequence(currentL);
}

function shrinkKey(key, l) {
    var newKey = "";
    for(i=0;i<l;i++) {
        newKey += key.charAt(i);
    }
//document.getElementById("usertext").value = "old key is "+ key+" new key is "+newKey+" l value "+l+" i value "+i;
    return newKey;
}

function expandKey(key, l) {
    var index = 0;
    while (key.length < l) {
        key += key.charAt(index);
        index ++;
    }
    return key;
}

function resizeKey(key, l) {
    var keyLen = key.length;
    if (keyLen > l) {
        key = shrinkKey(key,l);
    }
    else if (keyLen < l) {
        key = expandKey(key,l);
    }
    return key;
}

function nextFunction() {
    currentFunction = randSequence(currentL);
}

function functionValue(input, key) {
    var l = input.length;

    key = resizeKey(key, l);

    var output = "";
    for( var i=0;i<l;i++) {
        if(currentFunction.charAt(i) == "0") {
            output += XOR(input.charAt(i), key.charAt(i));
        }
        else {
            output += EQV(input.charAt(i), key.charAt(i));
        }
    }

	return output;
}

function applyFunction() {
    var input = document.getElementById("usertext").value;
     
   var l = input.length;	
    if(validateBinary(input) == 0 || l != currentL) {
		document.getElementById("usertext").value = "Please give a binary string of size " + currentL;
		return;
    }
  var key = document.getElementById("key").value;
    //apply the function on the plaintext and the key now.
//document.getElementById("usertext").value =  "l value "+l+"input is "+input + "key is "+key;
    document.getElementById("functionvalue").value = functionValue(input, key);
}

function padInput(input) {
    var numZeroes = (Math.ceil((input.length)/currentL))*currentL - input.length;
    for( var i=0; i<numZeroes; i++ ) {
                input += '0';
    }
    return input;
}

function CheckAnswer() {
	var userAnswer = document.getElementById("outputarea").value;
	if(userAnswer.length == 0) {
		alert("Please enter an answer!");
		return;
	}
    var plaintext = padInput(document.getElementById("plaintext").value);
    var iv = document.getElementById("iv").value;
    var key = document.getElementById("key").value;
    var numChunks = (plaintext.length)/currentL;
    for( var i=0; i<numChunks; i++ ) {
        var startIndex = i*currentL;
        var gethashfor = xorStrings(iv, plaintext.substring(startIndex, startIndex+currentL));
        iv = functionValue(gethashfor, key);
    }   
    if(trim(userAnswer) == trim(iv)) {
        document.getElementById('notification').innerHTML = "CORRECT!!";
    } else {
        document.getElementById('notification').innerHTML = "Incorrect answer, please try again!";
    }   
}
