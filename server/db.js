const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

const connectDB = () => {
    mongoose.connect("mongodb+srv://Wolf:wolf@cluster0.alg5y.mongodb.net/?retryWrites=true&w=majority", connectionParams)
        .then(() => {
            console.log('MongoDB Connection Succeeded.');
        })
        .catch((error) => {
            console.log('Error in DB connection: ' + error)
        });
}

module.exports = {
    connectDB,
}
