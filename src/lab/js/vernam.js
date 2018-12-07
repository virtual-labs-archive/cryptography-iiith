var PLAINTEXTLEN = 8;
var currentEncryption = "";

function validKey() {
    key = document.getElementById("userKey").value;
    var i = 0;
    for(i=0; i<key.length; i++){
	if (key.charAt(i) !== "0" && key.charAt(i)!== "1") {
	    break;
	}
    }
    if (i !== key.length) {
	alert("Only binary keys allowed!");
    }
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

function EQV(a, b) {
    if((a === "0" && b === "0"))
        return "1";
    else if((a === "0" && b === "1"))
        return "0";
    else if((a === "1" && b === "0"))
        return "0";
    else if((a === "1" && b === "1"))
        return "1";
    return "1";
}

function AND(a, b) {
    if((a === "0" && b === "0"))
        return "0";
    else if((a === "0" && b === "1"))
        return "0";
    else if((a === "1" && b === "0"))
        return "0";
    else if((a === "1" && b === "1"))
        return "1";
    return "0";
}

function VernamEncrypt() {
    plaintext = document.getElementById("p").value;
    key = document.getElementById("key").value;
    if(plaintext.length < 1){ alert("please enter some plaintext (binary only)"); return; }
    if(key.length < plaintext.length){ alert("key must be atleast the length of plaintext"); return; }
    ciphertext = "";
    for(i=0; i<plaintext.length; i++){
        ciphertext += XOR(plaintext.charAt(i), key.charAt(i));
    }
    document.getElementById("c").value = ciphertext;
}

function VernamDecrypt(f){
    ciphertext = document.getElementById("c").value;
    key = document.getElementById("key").value;
    if(ciphertext.length < 1){ alert("please enter some ciphertext (binary only)"); return; }
    if(key.length < ciphertext.length){ alert("key must be atleast the length of ciphertext"); return; }
    plaintext = "";
    for(i=0; i<ciphertext.length; i++){
        plaintext += XOR(ciphertext.charAt(i), key.charAt(i));
    }
    document.getElementById("p").value = plaintext;
}
 
function VernamRandSequence(len){ 
    var keylen = len; 
    ret=""; 
    for(i=0; i<keylen; i++) {
        ret += (Math.ceil(Math.random()*1000000))%2; 
    } 
    return ret;
}

function makeEqualProbability(seq) {
    var eqSeq = "";
    for(i=0;i<seq.length;i++) {
        if((seq.charAt(i) === "0")) {
	    eqSeq += "01";
	}
	else {
	    eqSeq += "10";
	}
    }
    return eqSeq;
}

function VernamRandKey(){
    plaintext = document.getElementById("p").value;
    ciphertext = document.getElementById("c").value;
    var keylen;
    if (plaintext.length > ciphertext.length) {
	keylen = plaintext.length;
    }
    else {
	keylen = ciphertext.length;
    }
    document.getElementById("key").value = VernamRandSequence(keylen); 
}

function equalProbabilitySequence(len) {
    randomSeq = VernamRandSequence(len);
    equalProbSeq = makeEqualProbability(randomSeq);
    seq = "";
    for(i=0;i<len;i++) {
	seq += equalProbSeq.charAt(i);
    }
    return seq;
}

function shrinkKey(key) {
    var newKey = "";
    for(i=0;i<PLAINTEXTLEN;i++) {
	newKey += key.charAt(i);
    }
    return newKey;
}

function expandKey(key) {
    var index = 0;
    while (key.length < PLAINTEXTLEN) {
	key += key.charAt(index);
	index ++;
    }
    return key;
}

function resizeKey(key) {
    var keyLen = key.length;
    if (keyLen > PLAINTEXTLEN) {
	key = shrinkKey(key);
    }
    else if (keyLen < PLAINTEXTLEN) {
	key = expandKey(key);
    }
    return key;
}

function encrypt(plaintext, key) {
    key = resizeKey(key);
    //encrypt the plaintext with the key now.
    var cipherText = "";
    var encryptionTechnique = currentEncryption;
    var i = 0;
    for(i=0;i<PLAINTEXTLEN;i++) {
	if(encryptionTechnique.charAt(i) === "0") {
	    cipherText += XOR(plaintext.charAt(i), key.charAt(i));
	}
	else {
	    cipherText += AND(plaintext.charAt(i), key.charAt(i));
	}
    }
    return cipherText;
}

function NextEncryption() {
    currentEncryption = VernamRandSequence(PLAINTEXTLEN);
}


function nextPlainText() {
    document.getElementById("plainarea").value = VernamRandSequence(PLAINTEXTLEN);
}

function nextKey() {
    keyLen = (Math.random()*100000)%7 + 6;
    document.getElementById("keyareaGen").value = VernamRandSequence(keyLen);
}

function checkKey() {
    var key = document.getElementById("keyareaGen").value;
    var zero = 0;
    var one = 0;
    if (key === "") {
	alert("Please calculate the new key with p=0.5");
	return;
    }
    for (i=0;i<key.length;i++) {
	if (key.charAt(i) === '0') {
	    zero ++;
	} else if (key.charAt(i) === '1') {
	    one ++;
	} else {
	    alert("Invalid Key. Please enter a binary key.");
    	    document.getElementById("keyareaGen").value = "";
	}
    }
    if (zero === one) {
        document.getElementById("keyNotify").value = "Correct Key! You may proceed.";
    } else {
        document.getElementById("keyNotify").value = "Wrong Key!";
    }
}
 
function EncryptP() {
    var k = document.getElementById("keyareaGen").value;
    if (k === "") {
	alert("Please calculate the new key with p=0.5");
	return;
    }
    document.getElementById("cipherarea").value = encrypt(document.getElementById("plainarea").value, k);
}

function NextVernamTest() {
    document.getElementById("plainarea").value = VernamRandSequence(PLAINTEXTLEN);
    keyLen = (Math.random()*100000)%7 + 6;
    document.getElementById("keyareaGen").value = VernamRandSequence(keyLen);
    NextEncryption();
}

function nextBinaryNum(binaryNum) {
    var index = 0;
    var len = binaryNum.length;
    //replace the first "0" with "1"
    if (index < len && binaryNum.charAt(index) === "0") {
	binaryNum = "1" + binaryNum.substring(1);
     return binaryNum;
    }
    //toggle all 1's
    while (index < len && binaryNum.charAt(index) === "1") {
        var tempBinaryNum = "";
        if (index > 0) {
            tempBinaryNum += binaryNum.substring(0,index);
	}
	tempBinaryNum += "0";
	if (index+1 < len) {
	    tempBinaryNum += binaryNum.substring(index+1,len);
	}
        binaryNum = tempBinaryNum;
	index ++;
    }
    //toggle next 0
    if (index < len) {
	var tempBinaryNum = "";
        tempBinaryNum += binaryNum.substring(0,index) + "1";
	if (index+1 < len) {
	    tempBinaryNum += binaryNum.substring(index+1);
	}
        binaryNum = tempBinaryNum;
    }
    return binaryNum;
}

function generateAllPairs() {
    var key = document.getElementById("userKey").value;
    if (key.length === 0) {
	alert("Please enter a binary key!");
        return;
    }
    key = resizeKey(key);
    var allTuples = "";
    var binaryNum = "00000000";
    var possiblePlainText= Math.pow(2,PLAINTEXTLEN);
    possiblePlainText= Math.pow(2,PLAINTEXTLEN);
    var i = 0;
    for (i=0;i<possiblelainText;i++) {
	binaryNum = nextBinaryNum(binaryNum);
	cryptedText = encrypt(binaryNum, key);
        allTuples += binaryNum + " , " + cryptedText + "\n" ;
    }
    document.getElementById("textarea2").value = allTuples;
}

function checkAnswer() {
    if (document.getElementById("yesno").value === 'yes')
    {
        document.getElementById("notification").value = "This is not correct, Please try again!";
	return;
    }
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    if (m1.length === 0 || m2.length === 0) {
	alert("Please enter values for m1 and m2");
	return;
    }
    var key = document.getElementById("userKey").value;
    key = resizeKey(key);
    var c1 = encrypt(m1, key);
    var c2 = encrypt(m2, key);
    if(c1 === c2) {
	document.getElementById("notification").value = "CORRECT!!";
    } else {
        document.getElementById("notification").value = "This is not correct, Please try again!";
    }
}
