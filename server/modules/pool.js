const pg = require('pg');

const config = {
    //Note: the user and password fields are necessary when running PostgreSQL 
    //on a Windows computer. I am unsure how it will affect postgres running on
    //macOS, so I have commented them out for the git push
    //user: 'postgres',
    //password: 'access-granted',
    database: 'koala_holla',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
}

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log('connected to postgres');
});

pool.on("error", (err) => {
    console.log('error connecting to postgres', error);
});

module.exports = pool;