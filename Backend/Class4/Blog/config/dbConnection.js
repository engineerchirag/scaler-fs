import mongoose from "mongoose"

const connectToDB = async() => { 
    console.log(`mongodb+srv://engineerchirag021:${process.env.DATABASE_PASSWORD}@cluster0.udbdzze.mongodb.net/user_db?retryWrites=true&w=majority`);
    const {connection} = await mongoose.connect(
        `mongodb+srv://engineerchirag021:${process.env.DATABASE_PASSWORD}@cluster0.udbdzze.mongodb.net/user_db?retryWrites=true&w=majority`
    );

    if (connection) {
        console.log(`Database connected at ${connection.host}`)
    }
}

export default connectToDB;