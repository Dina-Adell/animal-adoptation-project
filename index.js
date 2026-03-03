import express from 'express'
import dbconeection from "./src/DB//model/db.connection.js"
import authRoutes from "./src/moduels/auth/auth.routes.js"
import bootstrap from './src/app.controller.js';

const app = express()
bootstrap(app, express)

app.use("api/auth", authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env, PORT}`)
})


// protected by token : adding an animal for sale
// example of protected routes by token

import authMiddleware from './src/moduels/auth/auth.validation.js';

const router = express.Router();

router.post("/add-pet", authMiddleware, (req, res) => {
    res.json({ message: "pet added succesfully" })

});