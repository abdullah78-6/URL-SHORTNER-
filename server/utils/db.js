// ADVANCED CODE 
// import mysql from "mysql2/promise"
// // Aivein cloud database 
// export const db=mysql.createPool({
//      host: "mysql-26f0624f-abdullahqidwai7-8e7b.g.aivencloud.com",
//     user: "avnadmin",
//     password: process.env.DATABASE_PASSWORD,
//     database: "defaultdb",
//     port: 22502,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// })
// export const Connect=async()=>{
//     try {
//        const connection=await db.getConnection();

//         console.log("Database connected sucessfully");      
        
//     } catch (error) {
//         console.log("sql db error",error);
        
//     }

// }

// SELF EASY CODE 
import mysql from "mysql2/promise";
let db;
const Connect = async () => {
 try {
db = await mysql.createConnection({
   host: "mysql-26f0624f-abdullahqidwai7-8e7b.g.aivencloud.com",
    user: "avnadmin",
    password: process.env.DATABASE_PASSWORD,
    database: "defaultdb",
    port: 22502,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
        });
console.log("Database Connected Successfully");
} catch (error) {
        console.log("connect sql db error", error);
    }
};

export { Connect, db };