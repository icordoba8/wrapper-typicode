// Conexión a Base de datos
import mongoose from 'mongoose';
const {USER,PASSWORD,HOST,DB }: any = process.env;
class Db {
    static conect = () => {
        mongoose.connect( `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB}?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log('Base de datos conectada'))
        .catch((e: any) => console.log('error db:', e))
    }
}

export default Db;


