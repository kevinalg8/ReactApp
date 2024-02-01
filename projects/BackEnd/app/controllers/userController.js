import { pool } from '../config/db.js'

// Traer Usuarios
export const getUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('CALL spGetUsuarios()')
    res.json(rows)
  } catch (error) {
    console.log(error)
  }
}
export const createUsers = async (req, res) => {
  const { NOMBRE, EDAD, CORREO } = req.body
  try {
    const result = await pool.query(`CALL spCreateUser("${NOMBRE}", ${EDAD}, "${CORREO}")`)
    res.json(result)
  } catch (error) {
    console.log(error)
  }
}
