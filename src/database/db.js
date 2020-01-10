const Medoo = require('medoo');   
const Setting = {   
    host: 'abhishekmathur.cgk8yyvvyxgl.ap-south-1.rds.amazonaws.com',   
    port: 3306,   
    database: 'ecommerce',   
    user: 'abhishekmathur',   
    password: 'abhishek',   
    debug_mode: true   
}
let medoo = new Medoo(Setting);
async function setup() {
    return await medoo.setup(); // this code must call in a async function
}
setup().then(()=>{}).catch(()=>{});
module.exports=medoo;