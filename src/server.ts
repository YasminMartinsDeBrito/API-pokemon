import "reflect-metadata"
import express from 'express'
import registerRouters from './routes'
import * as dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
registerRouters(app)


const port = process.env.PORT ?? 3333

app.listen(port, () => {
    console.log(`App running on https://localhost:${port}`)
})
