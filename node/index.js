const express = require('express');
const fakerator = require('fakerator');

const app = express();
const port = 3000;

const fakeBr = fakerator("pt-BR");

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql');

app.get('/', (req,res) => {
    const conn = mysql.createConnection(dbConfig);

    const sqlInsert = `INSERT INTO people(name) values('${fakeBr.names.name()}')`;
    conn.query(sqlInsert);

    var names = '';
    conn.query("SELECT name FROM people", function(err, rows, fields) {
        if (err) throw err;
        rows.forEach(function(row) {
            names += `<br/>${row.name}`;
        });
        conn.end();
        res.send(`<h1>Full Cycle Rocks!</h1><br/>${names}`);
      });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port);
})