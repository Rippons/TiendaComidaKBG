import { Router } from "express";
import { getAllProducts, createProduct, getProduct, editProduct } from "../controllers/products.js";

const router = Router()


router.get("/", getAllProducts)
router.get("/:id", getProduct)
router.put("/:id", editProduct)
router.post("/", createProduct)



export default router