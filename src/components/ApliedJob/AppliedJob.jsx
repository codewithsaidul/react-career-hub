
import PropTypes from 'prop-types'
import { CiDollar, CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';

function AppliedJob({appliedJob}) {
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = appliedJob
  return (
    <div className="py-10 px-5 border flex flex-col md:flex-row justify-between lg:items-center">
      <div className="flex flex-col lg:flex-row gap-5 items-center">
        <figure className="flex justify-center w-[240px] h-[240px] items-center bg-[#F4F4F4] ">
          <img src={logo} alt="" />
        </figure>

        <div>
          <div>
            <h2 className="text-3xl font-extrabold text-[#474747] mb-3">
              {job_title}
            </h2>
            <h3 className="text-2xl font-semibold text-[#757575] mb-4">
              {company_name}
            </h3>
          </div>

          <div className="mt-5">
            <button className="py-2 px-4 rounded-xl bg-transparent mr-5 border border-[#7E90FE] text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="py-2 px-4 rounded-xl bg-transparent mr-5 border border-[#7E90FE] text-[#7E90FE]">
              {job_type}
            </button>
          </div>

          <div className="my-5 flex">
            <h2 className="flex gap-x-1 mr-5 text-xl text-[#757575] items-center">
              <CiLocationOn /> {location}
            </h2>

            <h2 className="flex gap-x-1 mr-5 text-xl text-[#757575] items-center">
              <CiDollar /> {salary}
            </h2>
          </div>
        </div>
      </div>

      <div className="card-actions">
        <Link to={`/job/${id}`}>
          <button className="py-4 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-xl text-[#fff] font-extrabold">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

AppliedJob.propTypes = {
  appliedJob: PropTypes.object
};

export default AppliedJob
