const { Router } = require('express');
const infoRouter = require('./infoRouter')

const router = Router();

router.use('/info', infoRouter)


module.exports = router;