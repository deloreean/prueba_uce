import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Page not found</h1>
            <p className="py-6">
              404 | Not found
            </p>
            <Link className="btn btn-dark" to={`/`}>
              Go to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
