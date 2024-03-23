import { useLoaderData } from "react-router-dom";
import BgImg from "../../assets/images/bg1.png";
import BgImg2 from "../../assets/images/bg2.png";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../ApliedJob/AppliedJob";
// import PropTypes from 'prop-types'

const AppliedJobs = () => {

  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();

    if(jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];

      for(const id of storedJobIds) {
        const job = jobs.find(job => job.id === id);

        if(job) {
          jobsApplied.push(job)
        }
      }

     setAppliedJobs(jobsApplied);

     setDisplayJobs(jobsApplied)

    }
  }, [jobs]);


  const handleJobsFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    } else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs)
    } else if (filter === 'onsite') {
      const onSiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onSiteJobs)
    }
  }
  return (
    <div>
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-32 relative">
        <h2 className="text-center text-5xl font-bold">Applied Jobs</h2>

        <div>
          <img
            className="max-[767px]:w-32 max-[1023px]:w-64 absolute bottom-0 left-0"
            src={BgImg}
            alt=""
          />
          <img
            className="max-[767px]:w-32 max-[1023px]:w-64 absolute top-0 right-0"
            src={BgImg2}
            alt=""
          />
        </div>
      </div>

      <div className="text-right mt-20 mb-10">
        <details className="dropdown">
          <summary className="m-1 btn">Fillter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="mb-20 grid grid-cols-1 gap-8">
        {displayJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

AppliedJobs.propTypes = {};

export default AppliedJobs;
