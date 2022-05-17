import { Request, Response } from 'express';
import pool from '../database'


class IndexController {

    public index (req: Request, res: Response) {
       pool.query('DESCRIBE PRODUCTOS');
       res.json('productos')
    }

}

export const indexController = new IndexController;
