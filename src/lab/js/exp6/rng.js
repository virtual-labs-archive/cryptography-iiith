// Random number generator - requires a PRNG backend, e.g. prng4.js

// For best results, put code like
// <body onClick='rngSeedTime();' onKeyPress='rngSeedTime();'>
// in your main HTML document.

var rngState;
var rngPool;
var rngPptr;

// Mix in a 32-bit integer into the pool
function rngSeedInt(x) {
  rngPool[rngPptr++] ^= x & 255;
  rngPool[rngPptr++] ^= (x >> 8) & 255;
  rngPool[rngPptr++] ^= (x >> 16) & 255;
  rngPool[rngPptr++] ^= (x >> 24) & 255;
  if(rngPptr >= rngPsize) rngPptr -= rngPsize;
}

// Mix in the current time (w/milliseconds) into the pool
function rngSeedTime() {
  rngSeedInt(new Date().getTime());
}

// Initialize the pool with junk if needed.
if(rngPool == null) {
  rngPool = new Array();
  rngPptr = 0;
  var t;
  if(navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
    // Extract entropy (256 bits) from NS4 RNG if available
    var z = window.crypto.random(32);
    for(t = 0; t < z.length; ++t)
      rngPool[rngPptr++] = z.charCodeAt(t) & 255;
  }  
  while(rngPptr < rngPsize) {  // extract some randomness from Math.random()
    t = Math.floor(65536 * Math.random());
    rngPool[rngPptr++] = t >>> 8;
    rngPool[rngPptr++] = t & 255;
  }
  rngPptr = 0;
  rngSeedTime();
  //rngSeedInt(window.screenX);
  //rngSeedInt(window.screenY);
}

function rngGetByte() {
  if(rngState == null) {
    rngSeedTime();
    rngState = prngNewstate();
    rngState.init(rngPool);
    for(rngPptr = 0; rngPptr < rngPool.length; ++rngPptr)
      rngPool[rngPptr] = 0;
    rngPptr = 0;
    //rngPool = null;
  }
  // TODO: allow reseeding after first request
  return rngState.next();
}

function rngGetBytes(ba) {
  var i;
  for(i = 0; i < ba.length; ++i) ba[i] = rngGetByte();
}

function SecureRandom() {}

SecureRandom.prototype.nextBytes = rngGetBytes;
