import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export const connectDB = async () => {
    try {
        const client = await pool.connect();

        console.log("✅ PostgreSQL Connected Successfully");

        const result = await client.query("SELECT version()");
        console.log(result.rows[0].version);

        client.release();
    } catch (err) {
        console.error("❌ Database Connection Failed");
        console.error(err.message);
    }
};

export default pool;