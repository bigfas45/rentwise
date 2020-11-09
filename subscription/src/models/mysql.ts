import mysql from 'mysql';

const db = mysql.createConnection({
    host      : 'nasdotcng.com',
    user      : 'notcsadm_otc',
    password  : 'N#M3IM^stG0' ,
    database  :  'notcsadm_nplcsadm_nsd_new',
    multipleStatements: true
  });
  
  // connect 
  // @ts-ignore
  db.connect((err) => {
    if (err){
      throw err;
    } 
    console.log('Mysql 1 Connected ')
  });

export {db}