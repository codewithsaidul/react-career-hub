import { Outlet } from "react-router-dom"
import { Footer } from "../footer/Footer"
import { Header } from "../header/Header"

export const Root = () => {
  return (
    <div>
      <div className="w-full px-3 sm:px-5 lg:px-0 max-w-[1170px] mx-auto lg:w-11/12">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
