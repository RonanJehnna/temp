/**
 * Created by manish on 6/9/17.
 */
var database = require('../Models/db_model');

module.exports = {
    home:home,
    postform:postform
}
function home(req,res){
    res.render('index');
}
function postform(req,res,next){
    console.log(req.body);
    var query = 'Insert INTO `form` (`name` , `email` , `phone` , `message`) VALUES(' +'\''+req.body.name+'\''+','+'\''+req.body.email+'\''+','+'\''+req.body.phone+'\''+','+'\''+req.body.message+'\''+')';
    console.log(query);
    var out = database.getDataFromTable(query,function(err,result){
        if(err) throw err;
        else
        {
            console.log("form submitted");
            res.redirect('/');
        }
    });
}
function parseIt(rawData){
    rawData = JSON.stringify(rawData);
    rawData = JSON.parse(rawData);
    return rawData;
}
