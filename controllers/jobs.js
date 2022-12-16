const Job = require('../model/jobs');
const { StatusCodes } = require('http-status-codes');
const {
  NotFoundError,
  BadRequestError,
} = require('../errors');

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({createdBy:req.user.userId});
  res.status(StatusCodes.OK).json({ jobs,count:jobs.length });
}

const getJob = async (req, res) => {
  const { user: {userId }, params: { id: jobId } } = req;
  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    throw new NotFoundError(`No  job with id ${jobId}`);
  }
  res.status(StatusCodes.OK).json({ job })
};

const createJobs = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({job})
}

const updateJobs = async (req, res) => {
  const {
    body: { company, position },
    user: { userId },
    params: { id: jobId }
  } = req; 

  if (company === "" || position === "") {
    throw new BadRequestError("Company and Position fields should have values");
  }
  const job = await Job.findByIdAndUpdate({
    _id: jobId,
    createdBy: userId
  },
    req.body,
    {
    new: true,
    runValidators: true
  });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(StatusCodes.OK).json({ job });
}

const deleteJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId }
  } = req;

  const job = await Job.findByIdAndDelete({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }

  res.status(200).send();
}

module.exports = {
  getAllJobs,
  getJob,
  createJobs,
  updateJobs,
  deleteJob
}