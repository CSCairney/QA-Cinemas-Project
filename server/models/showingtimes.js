const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShowingTimesSchema = new Schema ({
    day:{
        type: String,
        enum: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        required: true
    },

    times: {
        type: String,
        enum: ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "12:00 p.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.", "4:00 p.m.", 
                "5:00 p.m.", "6:00 p.m.", "7:00 p.m.", "8:00 p.m.", "9:00 p.m.", "10:00 p.m.", "11:00 p.m.", "12:00 a.m.", ],
        required: true
    }
})

const ShowingTimes = mongoose.model("ShowingTimes", ShowingTimesSchema);
module.exports = ShowingTimes;