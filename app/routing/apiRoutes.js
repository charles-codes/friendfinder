var friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(friendsData[0].scores);
        // console.log(req.body.scores);
        if (friendsData.length > 0) {
            var indexOfClosestMatch = 0;
            var lowestDiff;
            for (i = 0; i < friendsData.length; i++) {
                var totalDiff = 0;
                for (j = 0; j < friendsData[i].scores.length; j++) {
                    totalDiff += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
                }

                if (lowestDiff == undefined) {
                    lowestDiff = totalDiff;
                    indexOfClosestMatch = i;
                }
                if (lowestDiff = totalDiff) {
                    lowestDiff = totalDiff;
                    indexOfClosestMatch = i;
                }
            }
        }
        friendsData.push(req.body);

        res.json(friendsData[indexOfClosestMatch]);
    });
}