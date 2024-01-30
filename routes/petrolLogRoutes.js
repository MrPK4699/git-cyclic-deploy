
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const petrolLogController = require('../controllers/petrolLogController');

router.post('/create', petrolLogController.createPetrolLog);
router.get('/', petrolLogController.getPetrolLogs);
router.put('/:id', petrolLogController.updatePetrolLog);
router.delete('/:id', petrolLogController.deletePetrolLog);

module.exports = router;
