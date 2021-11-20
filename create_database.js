const mysql = require('mysql')

const dbConn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Nav@gur1",
        database: "mydata"
    })
    // dbConn.connect(function(err) {
    //     if (err) throw err;
    //     var sql = "DROP TABLE data_id";
    //     dbConn.query(sql, function(err, result) {
    //         if (err) throw err;
    //         console.log("Table deleted");
    //     });
    // });

// dbConn.connect(function(err) {
//         if (err) throw err;
//         console.log('detabase connected');
//         var sql = `CREATE TABLE data_id (id INT NOT NULL,name VARCHAR (255) NOT NULL,
//     logo VARCHAR(255) NOT NULL,notes VARCHAR(255),days_to_complete INT,
//     short_description VARCHAR(255) NOT NULL,type VARCHAR(100) NOT NULL,
//     lang_available VARCHAR(255) NOT NULL)`
//         dbConn.query(sql, function(err, result) {
//             if (err) throw err;
//             console.log("Table created");
//         });
//     })
const data = require('./Meraki_course.json')
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
    var values = []
    for (let i = 0; i < data.length; i++) {
        values.push([data[i].id, data[i].name, data[i].logo, data[i].notes, data[i].days_to_complete, data[i].short_description, data[i].type, (data[i].lang_available).toString()])
    }
    console.log(values);
    var sql = `INSERT INTO data_id VALUES?`
    dbConn.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log('data inseted succesfully.');
    })
})
module.exports = dbConn