import { config } from "dotenv"
config()

export const refreshSecret = process.env.REFRESH_PASSWORD
export const tokenSecret = process.env.SECRET_PASSWORD