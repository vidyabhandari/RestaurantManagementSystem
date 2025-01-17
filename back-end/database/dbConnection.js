import mongoose from 'mongoose';

export const dbConnection = () => {
  const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant'; // fallback to localhost if not found
  
  mongoose.connect(dbURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connected to database successfully!'))
  .catch(err => console.log('Error connecting to database:', err));
};
