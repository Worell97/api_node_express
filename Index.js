const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4306;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const router =  express.Router();
router.get('/',(req, res) => res.json({message: 'Working!'}));
app.use('/', router);

app.listen(port);
console.log('API Working!');


function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
    host     :'localhost',
    port     :4306,
    database :'world',
    user     :'root',
    password :'oscar051428',
    insecureAuth : true
  });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });

}
router.get('/City', (req, res) =>{
    execSQLQuery('SELECT * FROM City', res);
});