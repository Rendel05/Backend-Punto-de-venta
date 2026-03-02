import db from '../config/db.js'

export const getAllSuppliers = async ()=>{
    const [rows]= await db.query('SELECT proveedor_id, nombre FROM proveedores')
    return rows
}

