import mongoose from "mongoose";

//const urlConnection =  'mongodb://localhost:27017/ventas'
const urlConnection =  'mongodb+srv://ripponsdta:sDP93e1TWE0YxqKq@cluster0.sarum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/test'

export async function connectionDBMongoose(){
    try {
        await mongoose.connect(urlConnection);
        console.log('conected to db');
    } catch (error) {
        console.log(error);
    }
}
