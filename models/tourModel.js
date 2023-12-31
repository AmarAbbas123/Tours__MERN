const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A tour name must have less or equal then 40 characters'],
        minlength: [10, 'A tour name must have more or equal then 10 characters']
        // validate: [validator.isAlpha, 'Tour name must only contain characters']
      },
    duration : {
        type : Number,
        required: [true, "A tour must have a duration"],
    },
    maxGroupSize : {
        type : Number,
        required: [true, "A tour must have a group size"],
    },
    difficulty : {
        type : String,
        required: [true, "A tour must have a difficulty"],
    },
    ratingsAverage : {
        type : Number,
        default : 4.5
    },
    ratingsQuantity : {
        type : Number,
        default : 0
    },
    priceDiscount : {
        type : Number,
    },
    summary : {
        type : String,
        trim : true
    },
    description : {
        type : String,
        trim : true
    },
    imageCover : {
        type : String,
        required: [true, "A tour must have a cover image"],
    },
    images : [String],
    createdAt : {
        type : Date,
        default : Date.now()
    },
    startDates : [Date]
})
const Tour = mongoose.model("Tour",tourSchema);
module.exports = Tour
