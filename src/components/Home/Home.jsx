import Banner from "../banner/Banner"
import { FeaturedJobs } from "../featuredJobs/FeaturedJobs"
import { JobCategories } from "../jobCategories/JobCategories"


export const Home = () => {
  return (
    <div>
      <Banner/>
      <JobCategories/>
      <FeaturedJobs/>
    </div>
  )
}
