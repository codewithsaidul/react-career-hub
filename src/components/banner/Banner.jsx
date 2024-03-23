import UserImage from '../../assets/images/user.png'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between lg:items-center gap-10 pt-20 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
      <div className="px-4 md:px-10 py-5 space-y-5">
        <h1 className="text-4xl md:text-[80px] text-[#1A1919] font-extrabold md:leading-[96px]">
          One Step Closer To Your <br />{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p className="text-lg text-[#757575] font-medium">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>

        <button className="py-4 px-6 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] rounded-lg text-xl text-[#fff] font-extrabold">
          View Details
        </button>
      </div>

      <div>
        <figure className="w-full lg:mt-20">
          <img className="object-fit" src={UserImage} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Banner