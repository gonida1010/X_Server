import mysql from "mysql2";
import { config } from "../config.mjs";

// pool => mysql 커넥션을 해줌
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.database,
  password: config.db.password,
});
export const db = pool.promise();
