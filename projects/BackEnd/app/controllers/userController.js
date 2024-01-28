import { pool } from "../config/db.js";



//Traer Usuarios
export const getUsers = async (req, res) => {
    try {
        const [rows] = await pool.query(`CALL spGetUsuarios()`);
        res.json(rows);
    } catch (error) {
        console.log(error);
    }
}