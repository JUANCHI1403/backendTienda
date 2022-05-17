"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductControllers {
    //LISTAR TODOS LOS PRODUCTOS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productos = yield database_1.default.query('SELECT * FROM product');
            res.json(productos);
        });
    }
    //LISTAR UN PRODUCTOS
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productos = yield database_1.default.query('SELECT * FROM product WHERE id = ?', [id]);
            console.log(productos.length);
            if (productos.length > 0) {
                return res.json(productos[0]);
            }
            res.status(404).json({ text: "The product doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO PRODUCT set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'producto creado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const nuevoProducto = req.body;
            yield database_1.default.query('UPDATE product set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The product was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM product set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The product was DELETE" });
        });
    }
    category(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = yield database_1.default.query('SELECT * FROM category');
            res.json(category);
        });
    }
    //LISTAR UN PRODUCTOS POR CATEGORIA
    getCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const category = yield database_1.default.query('SELECT * FROM category WHERE id = ?', [id]);
            console.log(category.length);
            if (category.length > 0) {
                return res.json(category[0]);
            }
            res.status(404).json({ text: "The product doesn't exits" });
        });
    }
}
const productControllers = new ProductControllers;
exports.default = productControllers;
