console.clear();
const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const sql = require('sql-query');
const sqlQuery = sql.Query();
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require(`express-formidable`)());
app.set(`db`,require(`./database/db`));
app.set(`mysql`,require(`./database/mysql`));
const asyncHandler = require('express-async-handler')

app.get(`/admin/listAll`,asyncHandler( async function(request,response,next){
    console.dir(app.get(`mysql`));
    console.log(request);
    let items = await app.get(`mysql`).resolverPrepared(`Select * from ${request.query.table.split(`;`[0])}`);
    response.json({success:true,items});
}));
app.get(`/admin/insert`,asyncHandler(async function (request,response) {
    const query = sqlQuery.insert().into(request.query.table).set(JSON.parse(request.query.insert)).build();
    let response1 = await app.get(`mysql`).resolverPrepared(query,[]);
    response.json({success:true,items:response1});
}));
app.use(function(err,req,res,next){
    console.dir(err);
    res.json({success:false,error:`SERVER_ERROR`});
});
app.listen(3000,function(){

});

process.on(`uncaughtException`,function(params) {
   console.log(params) 
});

console.log(`app`,app);
process.on(`unhandledRejection`,function(params) {
    console.log(params) 
 });