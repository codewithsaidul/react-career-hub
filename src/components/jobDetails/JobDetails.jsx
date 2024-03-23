import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiDollar, CiPhone, CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEmail } from "react-icons/md";
import BgImg from "../../assets/images/bg1.png";
import BgImg2 from "../../assets/images/bg2.png";

export const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === parseInt(idInt));

  const handleAppliedJob = () => {
    toast("You Have Successfullu Applied");
  };
  return (
    <div className="mb-20">
      <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-32 relative">
        <h2 className="text-center text-5xl font-bold">Job details</h2>

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

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-base text-[#757575]">
            <span className="text-[#1A1919] font-extrabold mr-2">
              Job Description:
            </span>

            {job.job_description}
          </p>

          <p className="text-base text-[#757575] mt-5 space-x-3">
            <span className="text-[#1A1919] font-extrabold mr-2">
              Job Responsibility:
            </span>

            {job.job_responsibility}
          </p>

          <div className="mt-5">
            <h3 className="text-[#1A1919] font-extrabold">
              Educational Requirements:
            </h3>

            <p className="text-base text-[#757575] my-3">
              {job.educational_requirements}
            </p>
          </div>

          <div className="mt-5">
            <h3 className="text-[#1A1919] font-extrabold">Experiences:</h3>

            <p className="text-base text-[#757575] my-3">{job.experiences}</p>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D] py-10 px-5">
            <h4 className="text-xl text-[#1A1919] font-extrabold border-b pb-5">
              Job Details
            </h4>

            <div className="mt-5">
              <div>
                <h2 className="flex items-center text-xl">
                  <CiDollar className="text-[#7E90FE]" />{" "}
                  <span className="text-[#474747] font-extrabold mx-3">
                    Salary :
                  </span>
                  {job.salary}
                </h2>
              </div>

              <div className="mt-3">
                <h2 className="flex items-center text-xl">
                  <FaRegCalendarAlt className="text-[#7E90FE]" />{" "}
                  <span className="text-[#474747] font-extrabold mx-3">
                    Product Designer :
                  </span>
                  {job.job_title}
                </h2>
              </div>
            </div>

            <div className="mt-7">
              <h4 className="text-xl text-[#1A1919] font-extrabold border-b pb-5">
                Contact Information
              </h4>

              <div className="mt-3">
                <h2 className="flex items-center text-xl">
                  <CiPhone className="text-[#7E90FE]" />{" "}
                  <span className="text-[#474747] font-extrabold mx-3">
                    Phone :
                  </span>
                  {job.contact_information?.phone}
                </h2>
              </div>

              <div className="mt-3">
                <h2 className="flex items-center text-xl">
                  <MdOutlineEmail className="text-[#7E90FE]" />{" "}
                  <span className="text-[#474747] font-extrabold mx-3">
                    Email :
                  </span>
                  {job.contact_information?.email}
                </h2>
              </div>

              <div className="mt-3">
                <h2 className="flex items-center text-xl">
                  <CiLocationOn className="text-[#7E90FE] mr-2" />{" "}
                  <span className="text-[#474747] font-extrabold">
                    Address :
                  </span>
                  {job.contact_information?.address}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleAppliedJob}
              className="py-4 px-6 w-full mt-8 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-xl text-[#fff] font-extrabold"
            >
              Apply Now
            </button>
          </div>

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};
