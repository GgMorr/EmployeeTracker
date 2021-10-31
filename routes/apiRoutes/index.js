// See 12.4.4 for folder structure and routes
const express = require('express');
const router = express.Router();

router.use(require('./employeesRoutes'));
router.use(require('./departmentsRoutes'));
router.use(require('./rolesRoutes'));



module.exports = router;