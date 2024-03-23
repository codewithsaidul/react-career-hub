import { Link } from "react-router-dom"


function ErrorPage() {
  return (
    <div>
        <h2>Ooppss...!!!!</h2>
        <Link to="/">
            <button className="py-3 px-7 bg-rose-300 mt-10">Go Back Home</button>
        </Link>
    </div>
  )
}

export default ErrorPage