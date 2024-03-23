
import PropTypes from 'prop-types'
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {
      id,
      logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      job_type,
      salary,
    } = job;
  return (
    <div>
      <div className="bg-base-100 border py-10 px-8 space-y-5">
        <figure>
          <img src={logo} alt="logo" />
        </figure>

        <div>
          <h2 className="card-title">{job_title}</h2>
          <h2 className="card-title">{company_name}</h2>

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

          <div className="card-actions">
            <Link to={`/job/${id}`}>
              <button className="py-4 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-xl text-[#fff] font-extrabold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>


      
    </div>
  );
}

FeaturedJob.propTypes = {
    job: PropTypes.object
}

export default FeaturedJob