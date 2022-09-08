const { Discussions } = require("../models/discussions.js");

module.exports = {

    getAllDiscussions: (req, res) => {

        Discussions.find({}, (err, result) => {
            if (err) res.send(err);
            res.status(200).send(result);
        })
    },

    getById: async (req, res) => {

        const discussion = await Discussions.findById(req.params.id);

        res.status(200).send(discussion);
    },

    createDiscussions: (req, res) => {
        //Through a body request

        const discussions = new Discussion(req.body);

        discussions.save().then((result) => {
            res.status(201).send(`${result.username}'s review has been added to the discussion board.`)
        }).catch(err => { console.log(err); })
        // console.log(req.body);
    },

    updateDiscussions: (req, res) => {

        Discussions.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Updated review message id=${req.body.id}`);
        })
    },

    deleteDiscussions: (req, res) => {

        Discussions.findByIdAndDelete({ _id: req.params.id }, req.body, (err, result) => {
            if (err) res.send(err);
            res.status(202).send(`Deleted review message id=${req.body.id}`);
        })
    }

}
