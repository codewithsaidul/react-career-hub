import PropTypes from 'prop-types'

function JobCategori({ jobCategori }) {
    const {logo, category_name, availability} = jobCategori
  return (
    <div>
      <div className="py-10 px-5 bg-gradient-to-r from-[#7E90FE0D] to-[#9873FF0D]">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>

        <div>
          <h2 className="text-xl text-[#474747] font-extrabold mt-5">
            {category_name}
          </h2>
          <p className="mt-5 text-base text-[#A3A3A3] font-medium">{availability}</p>
        </div>
      </div>
    </div>
  );
}

JobCategori.propTypes = {
  jobCategori: PropTypes.object
};

export default JobCategori
