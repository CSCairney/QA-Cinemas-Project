const mongoose = require("mongoose");
const { Discussions } = require("../models/discussions.js");

module.exports = {

    //Get all discussions from the database.
    getAllDiscussions: async (req, res) => {
        try {
            const getDiscussions = await Discussions.find();
            res.status(200).json(getDiscussions);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one discussion from the database with maching ID.
    getById: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No discussion with id: ${req.params.id}` });
            const discussion = await Discussions.findById(req.params.id);
            res.status(200).json(discussion);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Get one user from the database with maching user name.
    getByUser: async (req, res, next) => {
        try {
            const discussion = await Discussions.findOne({ username: req.params.user });
            (discussion) ? res.status(200).json(discussion) :
                res.status(404).json({ message: `No user with name: ${req.params.user}` });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Create new discussion in the database. 
    createDiscussions: async (req, res) => {
        const createDiscussion = new Discussions(req.body);
        try {
            await createDiscussion.save();
            res.status(201).json(createDiscussion);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Update discussion in the database with maching ID.
    updateDiscussions: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No discussion with id: ${req.params.id}` });
            const updateDiscussion = await Discussions.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });
            res.status(201).json(updateDiscussion);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    },

    //Delete discussion from the database with maching ID.
    deleteDiscussions: async (req, res) => {
        try {
            if (!mongoose.Types.ObjectId.isValid(req.params.id))
                return res.status(404).json({ message: `No discussion with id: ${req.params.id}` });
            await Discussions.findByIdAndDelete({ _id: req.params.id });
            res.status(201).json({ message: "Discussion deleted successfully!" });
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

}
