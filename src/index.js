// get access to express application
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("bodyParser")
const {check, validationResult} = require
require("dotenv").config()

const app = express()

// setup initial middleware
app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParcer.urlencoded({extended: false}))
app.use(bodyParser.json())

// create a handler/controller for my route
const indexRoute = express.Router()

const handleGetRequest = (request, response) => {
    return response.json("The Express server is alive 😼")
}

// Handle form validation
const validation = [
     check("name", "A valid name is required")
        .not()
        .isEmpty()
        .trim()
        .escape(),
    check("email", "Please provide a valid email")
        .isEmail(),
    check("subject").optional().trim().escape(),
    check("message", "A message is longer than 2000 required").trim().escape().isLength(min:1, Max:2000)

    ]

const handlePostRequest = (request, response) => {
    response.append(access-control-allow-orgin, "*")
    return response.json("Email successfully sent!")
}

indexRoute.route("/")
    .get(handleGetRequest)
    .post(validation, handlePostRequest)

app.use("/apis", indexRoute)

// and setup express to listen on port 4200
app.listen(4200, () => {
    console.log("Express server successfully built")
})




// implement recaptcha
// configure and send emails using mailgun