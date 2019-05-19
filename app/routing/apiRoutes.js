// Get data from survey
var surveyData = require("../data/survey/sur")//finish path?..data/survey/surveyData


module.exports = function(app) {
    app.get("/api/survey", function(req, res) {
        res.json(surveyData);
      });

};// end of module.exports function

