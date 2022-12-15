const getAllJobs = async (req, res) => {
  res.send(`get All jobs`)
}

const getJob = async (req, res) => {
  res.send(`get job`)
}

const createJobs = async (req, res) => {
  res.send(`create job`)
}

const updateJobs = async (req, res) => {
  res.send('update job')
}

const deleteJob = async (req, res) => {
  res.send(`delete job`)
}

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJob
}