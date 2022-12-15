const express = require('express')
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJob
} = require('../controllers/jobs');


router.route('/').get(getAllJobs).get(getJob);
router.route('/:id').post(createJobs).patch(updateJobs).delete(deleteJob);

module.exports = router;