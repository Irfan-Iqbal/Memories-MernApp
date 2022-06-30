import mongoose from 'mongoose';


export const DB=()=>{
    try {
        mongoose.connect('mongodb+srv://irfani:PGc12344@cluster0.o8ksy.mongodb.net/mernstack?retryWrites=true&w=majority').
        then(console.log('connection succeesful'))
    } catch (error) {
        console.log(error)
    }
}
