'use strict';


module.exports = (err,req,res,next) => {
    res.status(500).send({
        error : 500,
        route: req.path,
        message:`Something Went Bad 😣 ${err}`
    })
}
// its middleware to handle 500 error