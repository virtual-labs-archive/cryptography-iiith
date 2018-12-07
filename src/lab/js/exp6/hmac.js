function trim(str) {
    return str.replace(/\s+/g,"");
}

var currentL=8;

function xorStrings(a, b) {
        if(a.length !== b.length) {
                alert("Error calculating XOR");
                return;
        }
        var output = "";
        for (var i=0; i<a.length; i ++) {
                if(a[i] === b[i]) {
                        output += "0";
                } else {
                        output += "1";
                }
        }
        return output;
}

function validateBinary(input) {
    var len = input.length;
    var i;
    for(i=0;i<len;i++) {
	if(input.charAt(i) !== "0" && input.charAt(i) !== "1") {
	    break;
	}
    }
    if (i<len) {
	return 0;
    }
    return 1;
}

function getNumInBinary(num) {
	var numInBinary = "";
	while (num > 0) {
		numInBinary = num%2 + numInBinary;
		num = Math.floor(num/2);
	}
	return numInBinary;
}

function isUnsignedInteger(s) {
  return (s.toString().search(/^[0-9]+$/) === 0);
}

function randSequence(len){
    ret="";
    for(i=0; i<len; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2;
    }
    return ret;
}

function nextPlainText() {
    var len = Math.random()*100%100+(2*currentL);
    document.getElementById("plaintext").value = randSequence(len);
}

function nextIV() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    if ( l < 8 ) {
	alert("Please select l >= 8");
	return;
    }
    currentL = l; 
    document.getElementById("iv").value = randSequence(currentL);
}

function nextKey() {
    var l = document.getElementById("l").value;
    if (! isUnsignedInteger(l) ) {
	alert("l should be a positive integer");
	return;
    }
    if ( l < 8 ) {
	alert("Please select l >= 8");
	return;
    }
    currentL = l; 
    document.getElementById("key").value = randSequence(currentL);
}

function XOR(a, b) {
    if((a === "0" && b === "0"))
        return "0";
    else if((a === "0" && b === "1"))
        return "1";
    else if((a === "1" && b === "0"))
        return "1";
    else if((a === "1" && b === "1"))
        return "0";
    return "0";
}

function hashFunction(input) {
    var l = input.length;
    var output = "";
    for(var i=0;i<l/2;i++) {
	output += XOR(input.charAt(2*i), input.charAt(2*i+1));
    }
	return output;
}

function getHash() {
    var input = document.getElementById("usertext").value;
    if(validateBinary(input) === 0) {
	document.getElementById("usertext").value = "Please give a binary string of size " + 2*currentL;
	return;
    }
    var l = input.length;
    if(l !== 2*currentL) {
	document.getElementById("usertext").value = "Please give a binary string of size 2l";
	return;
    }
    document.getElementById("hashvalue").value = hashFunction(input);
}

function padInput(input) {
	var numZeroes = (Math.ceil((input.length)/currentL))*currentL - input.length;
    for( var i=0; i<numZeroes; i++ ) {
		input += '0';
	}
	return input;
}

function padInputBefore(input) {
	var numZeroes = (Math.ceil((input.length)/currentL))*currentL - input.length;
    for( var i=0; i<numZeroes; i++ ) {
		input = '0' + input;
	}
	return input;
}

function padIopad(pad) {
	var output = pad;
	var numExtras = (Math.ceil((pad.length)/currentL))*currentL - pad.length;
	var index = 0;
    for( var i=0; i<numExtras; i++ ) {
		output += pad.charAt(index);
		index ++;
		if (index === pad.length) {
			index = 0;
		}
	}
	return output;	
}

function appendLength() {
    var plaintext = padInput(document.getElementById("plaintext").value);
	document.getElementById('pt').value = padInputBefore(getNumInBinary(plaintext.length));
}

function padPlainText() {
	document.getElementById("plaintext").value = padInput(document.getElementById("plaintext").value);
}

function checkAnswer() {
	var userAnswer = document.getElementById("cipherarea").value;
	if(userAnswer.length === 0) {
		alert("Please enter an answer");
		return;
	}
	
    var key = document.getElementById("key").value;
	var kxoripad = xorStrings(key, padIopad("01011100"));
    var plaintext = padInput(document.getElementById("plaintext").value);
	plaintext += padInputBefore(getNumInBinary(plaintext.length));
    var iv = document.getElementById("iv").value;
    var t = hashFunction(iv + kxoripad);
	var numChunks = (plaintext.length)/currentL;
    for( var i=0; i<numChunks; i++ ) {
		var startIndex = i*currentL;
		var gethashfor = t + plaintext.substring(startIndex, startIndex+currentL);
		t = hashFunction(gethashfor);
	}

	var kxoropad = xorStrings(key, padIopad("00110110"));
	var t2 = hashFunction(iv + kxoropad);
	t = hashFunction(t2 + t);
	
	if(trim(userAnswer) === trim(t)) {
		document.getElementById('notification').innerHTML = "CORRECT!!";
	} else {
		document.getElementById('notification').innerHTML = "Something is not correct, please try again!";
	}
}
