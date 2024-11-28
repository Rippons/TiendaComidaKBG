import express from 'express'
import { connectionDBMongoose } from './src/database/connection.js'
import routerAdmin from './src/router/admin.routes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routerProducts from './src/router/products.routes.js'


const PORT = process.env.PORT ?? 8000
const app = express()
connectionDBMongoose()

app.use(cookieParser())
app.use("/", express.static("dist", {redirect: false} ))
app.use(cors({origin:'http://localhost:5173',credentials:true}))
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: true }))


app.use("/api/admin",routerAdmin)
app.use("/api/products",routerProducts)

app.get("*", (req,res,next) =>{
    res.sendFile(process.cwd() + '/dist/index.html')
})

app.listen(PORT,'0.0.0.0',()=>{
    console.log(`Server on port ${PORT}`);
})
