const mysql = require('mysql');
const connection = mysql.createConnection({
    host     :'localhost',
    port     :3000,
    user     :'SYSDBA',
    password :'masterkey',
    database :'VETINOVA.ECO'
}),

conn = connection;
conn.connect(function(err){
    if(err) return console.log(err);
    console.log('Success!');
})