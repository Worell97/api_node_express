const mysql = require('mysql');
const connection = mysql.createConnection({
    host     :'localhost',
    port     :4306,
    database :'world',
    user     :'root',
    password :'oscar051428',
    insecureAuth : true
}),

conn = connection;
conn.connect(function(err){
    if(err) return console.log(err);
    console.log('Success!');
})