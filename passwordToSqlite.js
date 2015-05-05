/**
	
	take all password list in generated
	add them to sqlite file
	move password list to processed

**/

var fs = require('fs');
var exec = require('child_process').exec;

fs.readdir('./generated', function(err, files){
	
	for(var i = 0; i< files.length; i++){
		exec('sqlite3 -init '+files[i]+'.sqlite', function(err, stdout){
			console.log(stdout);
			exec('airolib '+files[i]+'.sqlite --import passwd ./generated/'+files[i], function(err, stdout, stderr){
				exec('mv ./generated/'+files[i]+' ./processedPasswordList/', function(err, stdout, stderr){
					console.log('file '+files[i]+' processed');
				});
			});
		});


	}	
});