import { useEffect, useState } from "react";
import JobCategori from "../jobCategori/JobCategori";


export const JobCategories = () => {
    const [jobCategoris, setJobCategori] = useState([]);

    useEffect(() => {
        fetch ('/categories.json')
        .then(res => res.json())
        .then(data => setJobCategori(data))
    }, [])
  return (
    <div className="my-20">
      <div className="text-center mb-16">
        <h2 className="max-[400px]:text-3xl text-4xl sm:text-5xl text-[#1A1919] font-extrabold mb-3">
          Job Category List {jobCategoris.length}
        </h2>
        <p className="text-base text-[#757575] font-medium mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {jobCategoris.map((jobCategori) => (
          <JobCategori
            key={jobCategori.id}
            jobCategori={jobCategori}
          ></JobCategori>
        ))}
      </div>
    </div>
  );
}
