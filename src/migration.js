const sqlite3 = require('sqlite3') ;

const db = new sqlite3.Database('./database.sqlite');


db.serialize ( ()=> {
    db.run(`DROP TABLE IF EXISTS 'Items'`);
    db.run('CREATE TABLE IF NOT EXISTS `Items` ( ' +
    '`id` INTEGER NOT NULL, ' +
    '`name` TEXT NOT NULL, ' +
    '`description` TEXT, ' +
    'PRIMARY KEY(`id`) )');
});
