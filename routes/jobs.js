const express = require('express')
const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJob
} = require('../controllers/jobs');


router.route('/').get(getAllJobs).post(createJobs);
router.route('/:id').get(getJob).patch(updateJobs).delete(deleteJob);

module.exports = router;