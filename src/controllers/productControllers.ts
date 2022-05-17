import { Request, Response } from 'express';
import pool from '../database'


class ProductControllers {
//LISTAR TODOS LOS PRODUCTOS
    public async list (req: Request, res: Response): Promise<void> {
        const productos = await pool.query('SELECT * FROM product');
        res.json(productos)
    }

    //LISTAR UN PRODUCTOS
    public async getProduct(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productos = await pool.query('SELECT * FROM product WHERE id = ?', [id]);
        console.log(productos.length);
        if (productos.length > 0) {
            return res.json(productos[0]);
        }
        res.status(404).json({ text: "The product doesn't exits" });
    }


    public async create (req: Request, res: Response): Promise<any> {
        await pool.query('INSERT INTO PRODUCT set ?', [req.body]);

        console.log(req.body)
        res.json( {message:'producto creado'});
    }

    public async update (req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        const nuevoProducto = req.body;
        await pool.query('UPDATE product set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The product was Updated" });
    }

    public async delete (req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM product set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The product was DELETE" });
    }

    public async category(req: Request, res: Response): Promise<void> {
        const category = await pool.query('SELECT * FROM category');
        res.json(category)
    }

    //LISTAR UN PRODUCTOS POR CATEGORIA
    public async getCategory(req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const category = await pool.query('SELECT * FROM category WHERE id = ?', [id]);
        console.log(category.length);
        if (category.length > 0) {
            return res.json(category[0]);
        }
        res.status(404).json({text: "The product doesn't exits"});
    }

}



 const productControllers = new ProductControllers;
export default productControllers;
