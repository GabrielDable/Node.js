const express = require("express");

const app = express();

const router = express.Router()

router.use("/contact", (req,res, next) =>{

  res.send("Contact Page");

  next()

})

router.use("/", (req,res,next) => { // If a incoming-http.message comes from http://localhost:8000/nested as the router is a middleware of "/nested " address.

    res.send("Root");

    next();


}) 

router.get("/contact/sales", (req,res,next) => { //If a incoming-http.message comes from http://localhost:8000/nested/contacts, But It breaks as in router.use the response was already send

  res.send("Sales")
  next()


})

app.use("/nested", router)

app.get("/", (req, res) => {

  res.send("home-page")
})

app.listen(8000, () => {})