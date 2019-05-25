// Get data from survey
var surveyArray = require("../data/friends");


module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
       return res.json(surveyArray);
      });

app.post("/api/friends", function(req, res) {
// the compatability logic
// take user survey question results 
var formInput = req.body;
var friendScore = formInput.scores;
console.log(req.body);
var answers = {
  name:"",
  photo:"",
  diff:1000
};

for ( var i = 0; i < surveyArray.length; i++) {
  var currentDiff = 0;
  for(var x = 0; x < surveyArray[i].scores.length; x++) {
    currentDiff += Math.abs(parseInt(surveyArray[i].scores[x]- parseInt(friendScore[x])))
  } if (currentDiff < answers.diff) {
    answers.name = surveyArray[i].name;
    answers.photo = surveyArray[i].photo;
    answers.diff = currentDiff;
  }
}
surveyArray.push(formInput);
res.json(answers);
 

});





};// end of module.exports function

