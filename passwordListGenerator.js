/**
	
	taille  : 4 à 12 char
	azAZ -_=+-09/\()!@#$%^&*.,!;:<>'"

	fichier 1000

**/

var FILESIZE = 1000000;

var generer = function generateKey(length){

	var chars = 'qwertyuioplkjhgfdsazxcvbnmQWRTYUIOPLKJHGFDSAZXCVBNM0987654321-_=+-/\\()!@#$%^&*.,!;:<>\'"';
	
	var alpha = 'qwertyuioplkjhgfdsazxcvbnmQWRTYUIOPLKJHGFDSAZXCVBNM0987654321';
	var special = '-_=+-/\\()!@#$%^&*.,!;:<>\'"';

	var password = '';

	for(var i =0; i < length; i++){
		if((Math.random()*100) <= 25 ) {
			password += special[Math.floor(Math.random() * special.length)];	
		} else {
			password += alpha[Math.floor(Math.random() * alpha.length)];
		}
	}

	return password;
}


var fs = require('fs');

var writeStream = fs.createWriteStream('./generated/pass'+generer(3)+'.txt', {
	flags : 'w',
	encoding: null,
	fd : null,
	mode: 0777
});

var writer = function(next, limit){
	var pass =generer(Math.floor((Math.random() * 8)+6 ))+'\n';
	writeStream.write( pass , function(){
		limit ++;
		console.log("generated "+(limit/FILESIZE*100)+"% "+limit+' on '+FILESIZE);
		if( limit == FILESIZE){
			next();
		} else {
			writer(next, limit);
		}
	});
}


writer(function(){
	writeStream.end();
	console.log(FILESIZE+' Generation accomplished, Victory is our!');
}, 0);

console.log('finish');