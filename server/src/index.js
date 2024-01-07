const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const passport = require('passport')
const cors = require('cors')

// constants
const {PORT, SERVER_URL, CLIENT_URL} = require("./constants")

// Routes
const authRouter = require("./routes/auth")

//import passport middleware
require('./middlewares/passport-middleware')

//initialize middlewares
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(passport.initialize())

// initialize routes
app.use("/api", authRouter)

// main app
const appStart = () => {
    try {
        app.listen(PORT, ()=>{
            console.log(`server started at... ${SERVER_URL}`)
        })
    } catch (error) {
        console.log(error)
    }
}

appStart()