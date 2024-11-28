import { compare, hash } from "bcrypt"
import Admin from "../models/admin.js"
import { createRefreshToken, createToken } from "../services/jwt.js"

export async function createAdmin(req,res){
    const { email, password, name } = req.body

    if(!email || !password || !name){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }

    try {
        const existingUser = await Admin.findOne({email:email})
        
        if(existingUser){
            return res.status(409).json({
                status: "error",
                message: "El usuario ya exite."
            })
        }

        const hashedPassword = await hash(password,10)

        if(!hashedPassword){
            return res.status(400).json({
                status: 'error',
                message: 'Ocurrión un error, intenta más tarde'
            })
        }
        
        const userToSave = new Admin({
            email: String(email),
            name: String(name),
            password: String(hashedPassword),
        })

        const userSaved = await userToSave.save()

        if(!userSaved){
            return res.status(400).json({
                status: "error",
                message: "Ocurrió un error, intenta más tarde"
            })
        }
        return res.status(201).json({
            status: "success",
            message: 'Usuario creado exitosamente'
        })  
    } catch (error) {        
        
        return res.status(500).json({
            status: "error",
            message: "Internal server error"
        })
    }
}

export async function login(req,res){
    const { email, password } = req.body
    
    if(!email || !password){
        return res.status(400).json({
            status: "error",
            message: "Faltan datos por enviar"
        })
    }
    try {
        const admin = await Admin.findOne({ email: String(email) });
        
        if(!admin){
            return res.status(401).json({
                status: "error",
                message: "Credenciales incorrectas."
            })
        }

        const matchPassword = await compare( password,admin.password)

        if(!matchPassword){
            return res.status(401).json({
                status: "error",
                message: 'Credenciales incorrectas.'
            })
        }
        const token = createToken(admin)
        const refreshToken = createRefreshToken(admin)
        res.cookie('acces_token', token, {httpOnly:false, secure: process.env.NODE_ENV === 'production', path: 'http://localhost:5173'})

        res.cookie('refresh_token', refreshToken, {httpOnly:false, secure: process.env.NODE_ENV === 'production', path: 'http://localhost:5173'})
        
        return res.status(200).json({
            status: "success",
            message: "Inicio de sesión exitoso.",
            admin: {
                name: admin.name,
                rol: admin.rol
            }
        })

    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            status: "error",
            message: 'Error interno'
        })
    }
}