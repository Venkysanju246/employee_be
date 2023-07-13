const jwt = require("jsonwebtoken")

const auth = (req, res, next)=>{
  const token = req.headers.authorization
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
    if(decoded){
        req.body.userID = decoded.userID
        next()
    }else{
        return res.status(400).send({
            msg: "Invalid authorization"
        })
    }
  })
}

module.exports = auth