import { Router } from 'express';

import categoryControllers  from '../controllers/categoryController'

class CategoryRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {


        this.router.get('/category', categoryControllers.category);
        this.router.get('/category/:id', categoryControllers.getCategory)

    }

}

const categoryRoutes = new CategoryRoutes();
export default categoryRoutes;
