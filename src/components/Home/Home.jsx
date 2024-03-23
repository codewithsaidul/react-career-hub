import Banner from "../banner/Banner"
import { FeaturedJobs } from "../featuredJobs/FeaturedJobs"


export const Home = () => {
  return (
    <div className="mt-20">
      <Banner/>
      <FeaturedJobs/>
    </div>
  )
}
