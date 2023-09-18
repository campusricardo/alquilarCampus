const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Online');
    } catch (error) {
        console.log(error);
        throw new Error(`database can't launch`);
    }
}

module.exports = {
    dbConnection
}