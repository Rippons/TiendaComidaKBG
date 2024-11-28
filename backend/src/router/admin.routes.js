import { Router } from "express";
import { createAdmin, login } from "../controllers/admin.js";

const router = Router()

router.post("/", createAdmin)
router.post("/login", login)



export default router