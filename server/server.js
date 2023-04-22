import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js'

const app = express() 

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const connectToMongo = 'mongodb+srv://joshuabentley:traya1213@cluster0.urzgrho.mongodb.net/test'
const PORT = process.env.PORT || 5000;

mongoose.connect(connectToMongo)
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err.message))
