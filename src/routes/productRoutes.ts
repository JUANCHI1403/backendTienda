import { Router } from 'express';

import productControllers  from '../controllers/productControllers'
import categoryControllers from "../controllers/categoryController";

class ProductRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productControllers.list);

        this.router.get('/:id', productControllers.getProduct);
        this.router.post('/', productControllers.create);
        this.router.put('/:id', productControllers.update);
        this.router.delete('/:id', productControllers.delete);
        this.router.get('/category', categoryControllers.category);
        this.router.get('/category/:id', categoryControllers.getCategory)

    }

}

const productRoutes = new ProductRoutes();
export default productRoutes.router;
