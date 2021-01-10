module.exports = (req,res,next) =>{
    if(req.params.id) {
        next();
    } else {
        res.status(400).send('Bad request : missing id')    }

}