import mongoose from "mongoose";
// const MONGO_URL = "mongodb+srv://ryuga01:ryuga01@cluster0.zijkqhj.mongodb.net/";
const MONGO_URL = "mongodb://0.0.0.0:27017";
export const connectDB = () => {
    mongoose.connect(MONGO_URL, {
        dbName: "Ecommerce_24",
    }).then(c => console.log(`connected to DB to  ${c.connection.host}`)).catch(error => console.log(error));
};
