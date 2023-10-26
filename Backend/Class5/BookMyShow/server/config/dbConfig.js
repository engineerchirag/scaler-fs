import mongoose from "mongoose"

mongoose.set('strictQuery', false);

const connectToDatabase = async() => {
    try {
        const {connection} = await mongoose.connect(
            `mongodb+srv://engineerchirag021:${process.env.DATABASE_PASSWORD}@cluster0.udbdzze.mongodb.net/bookmyshow?retryWrites=true&w=majority`
        );

        console.log(connection);
    
        if (connection) {
            console.log(`Connected to databse ${connection.host}`);
        }

    } catch(e) {
        console.log(e);
    }
}

export default connectToDatabase;