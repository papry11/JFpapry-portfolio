import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import contactRouter from './routes/contactRoute.js'
import publicRoute from './routes/publicRoute.js'
import blogRouter from "./routes/blogRoute.js";
import categoryRouter from "./routes/categoryRoute.js";


// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())


//  api endpoints
app.use("/" , publicRoute)
app.use('/api/admin', adminRouter)
app.use("/api/contacts", contactRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/categories", categoryRouter);


app.get('/', (req,res) => {
    res.send('API WORKING')
})


app.listen(port , ()=> console.log("Server Started" , port))