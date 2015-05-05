/**
	Use the sqlite db in dbToProcess

	store them in processed db	
**/

var fs = require('fs');
var exec = require('child_process').exec;

fs.readdir('./dbToProcess', function(err, files){
	
	for(var i = 0; i< files.length; i++){
		
		exec('airolib-ng ./dbToProcess/'+files[i]+' --batch', function(err, stdout, stderr){

			exec('mv ./dbToProcess/'+files[i]+' ./processedDb/', function(err, stdout, stderr){
				console.log(files[i]+' processed and ready to crack!')
			});

		});
	}	
});