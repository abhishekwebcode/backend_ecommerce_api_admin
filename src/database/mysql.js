const mysql = require(`mysql`);

const pool = mysql.createPool({
   connectionLimit : 10,
   host: 'abhishekmathur.cgk8yyvvyxgl.ap-south-1.rds.amazonaws.com',   
    port: 3306,   
    database: 'ecommerce',   
    user: 'abhishekmathur',   
    password: 'abhishek',   
});

const resolver = function(query) {
    return new Promise (function(resolve,reject) {
        pool.query(query, function (err, res, fields) {
            if (err) reject(err);
            resolve({res,fields});
         });
    });
};

const resolverPrepared = function(query,params) {
    return new Promise (function(resolve,reject) {
        pool.query(query,params, function (err, res, fields) {
            if (err) reject(err);
            resolve({res,fields});
         });
    });
};

module.exports = {resolver,resolverPrepared};