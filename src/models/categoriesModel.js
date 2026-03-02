import db from '../config/db.js'

export const getAllCategoriesNames = async ()=>{
    const [rows]= await db.query('SELECT categoria_id, nombre, imagen_url FROM categorias')
    return rows
}

export const getCategoriasById = async (id)=>{
    const [rows]= await db.query('SELECT categoria_id, nombre FROM categorias WHERE id = ?',[id])
    return rows[0]
}