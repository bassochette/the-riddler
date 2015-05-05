/**
	
	Import essid files to sqlite db

**/

var fs = require('fs');
var exec = require('child_process').exec;

fs.readdir('./db', function(err, files){
	for(var i = 0; i< files.length; i++){
		exec('airolib-ng '+files[0]+' --import essid ./essid/*', function(err, stdout, stderr){
			exec('mv ./db/'+files[i]+' ./dbToProcess/', function(err, stdout, stderr){
				console.log('db '+files[i]+' ready to be processed.');
			});
		})
	}	
});