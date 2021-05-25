import mysql from 'mysql';

const db = mysql.createPool({
    host      : 'nasdotcng.com',
    user      : 'notcsadm_otc',
    password  : 'N#M3IM^stG0' ,
    database  :  'notcsadm_nplcsadm_nsd_new',
    multipleStatements: true
  });
  
  // connect 
  // @ts-ignore
db.getConnection(function(err, connection) {
  // connected! (unless `err` is set)
  connection.end();
});

export {db}