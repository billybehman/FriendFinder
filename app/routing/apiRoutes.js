var friends = require("../data/friends")

express = require("express")

router = express.Router()

router.get("/api/friends", function(req, res) {
    res.json(friends)
})





router.post("/api/friends", function(req, res) {
    friends.push(req.body)
    res.json(friends)
    
})



module.exports = router