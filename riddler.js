/**
	
	taille  : 4 à 12 char
	azAZ -_=+-09/\()!@#$%^&*.,!;:<>'"

	fichier 1000

**/

var FILESIZE = 1000;

var generer = function generateKey(length){

	var chars = 'qwertyuioplkjhgfdsazxcvbnmQWRTYUIOPLKJHGFDSAZXCVBNM0987654321-_=+-/\\()!@#$%^&*.,!;:<>\'"';
	
	var password = '';

	for(var i =0; i < length; i++){
		password += chars[Math.floor(Math.random() * chars.length)];
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

var written = 0;

var writer = function(next){
	var pass =generer(Math.floor((Math.random() * 8)+4 ))+'\n';
	writeStream.write( pass , function(){
		written ++;
		console.log(pass);
		if( written == FILESIZE){
			next();
		} else {
			writer(next);
		}
	});
}


writer(function(){
	writeStream.end();
	console.log('Generation accomplished, Victory is our!');
});

console.log('finish');