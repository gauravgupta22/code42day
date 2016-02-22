
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.sendOTP = function(req, res){
	console.log(req.body.mobileNo);
	function randomString(length, chars) {
    	var result = '';
    	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    	return result;
	}
	var rString = randomString(6, '0123456789');
	var message ="Your high security SecureTM password is "+rString+" .Do not share this with anyone.";
	var runner = require("child_process");
	var argsString = "7860931204,12345678,"+req.body.mobileNo+",'"+message+"'";
	
	runner.exec("php way2sms.php" + " " +argsString, function(err, phpRes, stderr) {
 		if(err) console.log(err); /* log error */
 		if(phpRes){
 			res.json({"result":"success"});
 			console.log("success");
 		}else{
 			res.json({"result":"failure"});
 			console.log("failure");
 		}
	});
  	
  	
};

exports.verifyOTP = function(req, res){
  res.render('index', { title: 'Express' })
};