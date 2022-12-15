const app = require('./app');
const mongoose = require('mongoose');
const DB = process.env.DataBase;

mongoose.set('strictQuery', true);
mongoose.connect(DB, {
    useNewUrlParser: true,
    
}).then( () => {
    console.log(`DB is Connected successfully....`);
}).catch((error) => {
    console.log(`Error : - ${error}`);
})

app.listen(process.env.PORT, ()=> {
    console.log(`App is running on PORT ${process.env.PORT}....`);
})