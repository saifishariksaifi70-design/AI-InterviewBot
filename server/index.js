import express from 'express'
import dotenv from 'dotenv'
import connectDb from '../server/config/connectDb.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import router from './routes/interviewRoute.js'

dotenv.config()
const app = express()
app.use(cors({
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true
}))


app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/interview', router)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
    connectDb()
})