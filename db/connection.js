import mongoose from 'mongoose'

let MONGODB_URI = 
"mongodb+srv://guess01325:145012@tacato-truck.p1mcedu.mongodb.net/?retryWrites=true&w=majority&appName=tacato-truck" 


  

mongoose.set('strictQuery', false);

// mongoose.set('debug', true);

// mongoose.set('useCreateIndex', true);

mongoose.set('returnOriginal', false);

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

export default mongoose.connection
