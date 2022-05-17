"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = __importDefault(require("../controllers/productControllers"));
const categoryController_1 = __importDefault(require("../controllers/categoryController"));
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productControllers_1.default.list);
        this.router.get('/:id', productControllers_1.default.getProduct);
        this.router.post('/', productControllers_1.default.create);
        this.router.put('/:id', productControllers_1.default.update);
        this.router.delete('/:id', productControllers_1.default.delete);
        this.router.get('/category', categoryController_1.default.category);
        this.router.get('/category/:id', categoryController_1.default.getCategory);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
