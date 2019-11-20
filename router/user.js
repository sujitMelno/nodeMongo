let userController = require('../controller/user');
let authController = require('../controller/author')

router.post('/service/user', userController.user);
router.post('/service/author',authController.save );
module.exports = router;
