import { useEffect, useState } from "react";
import FeaturedJob from "../featuredJob/FeaturedJob";


export const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)

    useEffect(() => {
        fetch ('../jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [])


  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl text-[#1A1919] font-extrabold mb-3">
          Featured Jobs 
        </h2>
        <p className="text-base text-[#757575] font-medium mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 items-center md:items-start  md:grid-cols-2 gap-8">
        {jobs.slice(0, dataLength).map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>

      <div
        className={` mx-auto text-center mt-5 ${dataLength === 6 && "hidden"}`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="py-4 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-xl text-[#fff] font-extrabold"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
}
