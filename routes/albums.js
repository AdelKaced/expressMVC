const router = require('express').Router();
const albumController= require('../controllers/albumsController')
const idExists = require('../middlewares/idExists')

router.get('/',albumController.getAll);
router.get('/:id', idExists ,albumController.getOne);
router.post('/',albumController.handlePost);

module.exports = router ;