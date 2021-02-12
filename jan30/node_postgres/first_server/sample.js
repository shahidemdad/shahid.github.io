const { Pool } = require('pg')
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'a10',
    password: '2021',
    port: 5432,
})
pool.query('select * from movies',(err,res) => {
    console.log(err,res)
    pool.end()
})