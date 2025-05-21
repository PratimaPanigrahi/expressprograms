var mysql = require('mysql')
var con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"ujjwaldb",
    port:"3306"
});

con.connect(function(err){
    if(err)throw err;

    console.log("My sql Connected");
    var qry = "DROP TABLE abc";
    con.query(qry,function(err,result){
        if(err) throw err;
    
        console.log("Result");
        console.log(result);
    });
    });
