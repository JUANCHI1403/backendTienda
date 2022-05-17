import { Request, Response } from 'express';
import pool from '../database'


class CategoryControllers {
//LISTAR TODAS LAS CATEGORIAS

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

     const categoryControllers = new CategoryControllers;
export default categoryControllers;
