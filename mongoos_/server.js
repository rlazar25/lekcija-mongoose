const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose');

const Account = require('./models/Account');

async function dbCon(){
    await Account.create({
        firstName: 'Kristina',
        lastName: 'Petrovic',
        deposit: 1000,
        cCards: ['VISA', 'MasterCard']  
    });
}

dbCon();
