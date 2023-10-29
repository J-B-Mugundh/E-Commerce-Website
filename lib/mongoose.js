import mongoose from "mongoose";

export async function initMongoose(){
  if(mongoose.connection.readyState === 1){
    mongoose.set('strictQuery', true);
    return mongoose.connection.asPromise();
  }   
  return await mongoose.connect(process.env.MONGODB_URL)

}