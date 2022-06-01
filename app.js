require('dotenv').config()
const express = require('express')
const cors = require('cors')
const notFoundMiddleware = require('./middlewares/notFound')
const errorMiddleware = require('./middlewares/error')
const authRouter = require('./routes/authRoute')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/auth', authRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8008

app.listen(port, ()=> console.log(`Server on ${port}`))

