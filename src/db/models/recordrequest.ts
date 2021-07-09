import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    request: {
        originalUrl: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        method: {
            type: String,
            required: true,
        },
    },
    records: {} || []
});


const RecordRequestModel = mongoose.model('RecordRequest', schema);


export default RecordRequestModel;
